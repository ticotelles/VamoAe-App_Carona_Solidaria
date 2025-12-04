import { prisma } from '../db.js';

export async function getRides(req, res) {
  try {
    const data = await prisma.rides.findMany({
      include: { user: { select: { id: true, fullname: true, whatsapp: true } } },
      orderBy: { id: 'desc' }
    });
    return res.json(data);
  } catch (err) {
    console.error('erro ao buscar caronas', err);
    return res.status(500).json({ error: 'Erro no servidor' });
  }
}

export async function createRide(req, res) {
  try {
    const { origin, destination, whatsapp, date, time, value } = req.body;
    const userId = req.user && req.user.id ? req.user.id : undefined;
    if (!origin || !destination) return res.status(400).json({ error: 'origin and destination required' });

    const newRide = await prisma.rides.create({
      data: {
        origin,
        destination,
        whatsapp,
        date,
        time,
        value: value ? parseInt(value) : null,
        isRideRequest: false,
        userId,
      },
      include: { user: { select: { id: true, fullname: true } } }
    });

    return res.status(201).json({ message: 'Carona cadastrada com sucesso!', newRide });
  } catch (err) {
    console.error('Error creating ride:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function createRequestRide(req, res) {
  try {
    const { origin, destination, whatsapp, date, time } = req.body;
    const userId = req.user && req.user.id ? req.user.id : undefined;
    if (!origin || !destination) return res.status(400).json({ error: 'origin and destination required' });

    const newRequestRide = await prisma.rides.create({
      data: {
        origin,
        destination,
        whatsapp,
        date,
        value: null,
        time,
        isRideRequest: true,
        userId,
      },
      include: { user: { select: { id: true, fullname: true } } }
    });

    return res.status(201).json({ message: 'solicitação de carona criada com sucesso!', newRequestRide });
  } catch (err) {
    console.error('Error creating request ride:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default { getRides, createRide, createRequestRide };
