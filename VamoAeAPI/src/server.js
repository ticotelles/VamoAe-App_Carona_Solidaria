import bcrypt from 'bcryptjs';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import jwt from 'jsonwebtoken';
import { prisma } from './db.js';

dotenv.config();

// Verifique se a variável JWT_SECRET está definida
if (!process.env.JWT_SECRET) {
  console.error('ERRO: variável de ambiente JWT_SECRET não definida. Crie um arquivo .env com JWT_SECRET=seu_seguro_valor');
  process.exit(1);
}


const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // use findFirst since `email` may not be declared unique in the schema
    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ error: "Usuário não encontrado" });
    }

    const senhaValida = await bcrypt.compare(password, user.password);

    if (!senhaValida) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    // Gerar token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.json({ message: "Logado com sucesso!", token });
  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ error: "Erro no servidor" });
  }
});


app.post('/create-user', async (req, res) => {

  try {
    const { fullname, email, whatsapp, password } = req.body;
    // Verifica se usuário já existe
    // use findFirst for the same reason: email isn't necessarily unique
    const existing = await prisma.user.findFirst({ where: { email } });
    if (existing) {
      return res.status(409).json({ error: 'Email já cadastrado' });
    }

    // Hashear senha antes de salvar
    const hashed = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        fullname,
        email,
        whatsapp,
        password: hashed
      }
    });

    res.status(201).json({ message: "usuario criado com sucesso!", newUser });
    console.log('usuario criado com sucesso', newUser);
  } catch (error) {
    console.error({ error: "error ao criar usuário", error });
    res.status(500).json({ error: "Erro no servidor" });
  }
});

// Middleware para proteger rotas com JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token não fornecido' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Token inválido' });
    req.user = user;
    next();
  });
}


app.get('/home', authenticateToken, async (req, res) => {
  try {
    // const response = await axios.get('http://localhost:3000/rides');
    // retornar caronas incluindo o usuário que criou cada uma
    const data = await prisma.rides.findMany({
      include: {
        user: { select: { id: true, fullname: true, whatsapp: true } }
      }
    });
    res.status(200).json(data);
    console.log('caronas retornadas:', data);

  } catch (error) {
    console.error('erro ao buscar caronas', error)
    res.status(500).json({ error: "Erro no servidor" });
  }
})



app.post('/create-ride', authenticateToken, async (req, res) => {
  try {

    const { origin, destination, whatsapp, date, time, value } = req.body;
    const userId = req.user && req.user.id ? req.user.id : undefined;

    const newRide = await prisma.rides.create({
      data: {
        origin,
        destination,
        whatsapp,
        date,
        time,
        value: value ? parseInt(value) : null,
        isRideRequest: false,
        userId: userId,
        //  connect: { id: userId }
      },
      include: {
        user: { select: { id: true, fullname: true } }
      }
    });

    res.status(201).json({ message: 'Carona cadastrada com sucesso!', newRide });
    console.log('Carona criada:', newRide);

  } catch (error) {
    console.error(' Error creating ride:', error);

    if (!res.headersSent) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});


app.post('/create-request-ride', authenticateToken, async (req, res) => {
  try {
    const { origin, destination, whatsapp, date, time } = req.body;


    const userId = req.user && req.user.id ? req.user.id : undefined;

    const newRequestRide = await prisma.rides.create({
      data: {
        origin,
        destination,
        whatsapp,
        date,
        value: null,
        time,
        isRideRequest: true,
        userId: userId
      },
      include: {
        user: { select: { id: true, fullname: true } }
      }

    });

    res.status(201).json({ message: "solicitação de carona criada com sucesso!", newRequestRide })
    console.log('create-request-ride', newRequestRide)

  } catch (error) {
    console.error('Error creating ride:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Rota para retornar informações do usuário autenticado
app.get('/me', authenticateToken, async (req, res) => {
  try {
    const userId = req.user && req.user.id;
    if (!userId) return res.status(400).json({ error: 'Usuário inválido no token' });

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        fullname: true,
        email: true,
        whatsapp: true,
        // createdAt: true,
      },
    });

    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

    res.json({ user });
  } catch (error) {
    console.error('Erro em /me', error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
});
