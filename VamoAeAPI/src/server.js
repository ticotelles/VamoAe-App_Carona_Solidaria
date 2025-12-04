import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import jwt from 'jsonwebtoken';
import { login, me } from './controllers/auth.js';
import { createRequestRide, createRide, getRides } from './controllers/rides.js';
import { createUser } from './controllers/user.js';
import { auth as authenticateToken } from './middlewares/auth.js';

dotenv.config();

// Verifique se a variável JWT_SECRET está definida
if (!process.env.JWT_SECRET) {
  console.error('ERRO: variável de ambiente JWT_SECRET não definida. Crie um arquivo .env com JWT_SECRET=seu_seguro_valor');
  process.exit(1);
}


const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', login);


app.post('/create-user', createUser);

// Middleware para proteger rotas com JWT (usando `src/middlewares/auth.js`)


app.get('/home', authenticateToken, getRides);



app.post('/create-ride', authenticateToken, createRide);


app.post('/create-request-ride', authenticateToken, createRequestRide);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Rota para retornar informações do usuário autenticado
app.get('/me', authenticateToken, me);
