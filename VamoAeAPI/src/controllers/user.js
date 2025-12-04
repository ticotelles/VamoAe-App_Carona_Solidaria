import bcrypt from 'bcryptjs';
import { prisma } from '../db.js';

export async function createUser(req, res) {
  try {
    const { fullname, email, whatsapp, password } = req.body;
    if (!email || !password || !fullname) {
      return res.status(400).json({ error: 'fullname, email and password are required' });
    }

    const existing = await prisma.user.findFirst({ where: { email } });
    if (existing) {
      return res.status(409).json({ error: 'Email já cadastrado' });
    }

    const hashed = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        fullname,
        email,
        whatsapp,
        password: hashed,
      },
    });

    return res.status(201).json({ message: 'usuario criado com sucesso!', newUser });
  } catch (error) {
    console.error('error ao criar usuário', error);
    return res.status(500).json({ error: 'Erro no servidor' });
  }
}

export default { createUser };
