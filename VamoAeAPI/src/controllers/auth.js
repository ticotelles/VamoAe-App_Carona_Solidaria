import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../db.js';

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'email and password required' });

    const user = await prisma.user.findFirst({ where: { email } });
    if (!user) return res.status(401).json({ error: 'Usuário não encontrado' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: 'Senha incorreta' });

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return res.json({ message: 'Logado com sucesso!', token });
  } catch (err) {
    console.error('erro no login', err);
    return res.status(500).json({ error: 'Erro no servidor' });
  }
}

export async function me(req, res) {
  try {
    const userId = req.user && req.user.id;
    if (!userId) return res.status(400).json({ error: 'Usuário inválido no token' });

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, fullname: true, email: true, whatsapp: true },
    });
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
    return res.json({ user });
  } catch (err) {
    console.error('erro em /me', err);
    return res.status(500).json({ error: 'Erro no servidor' });
  }
}

export default { login, me };
