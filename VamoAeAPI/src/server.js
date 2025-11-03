import cors from 'cors';
import express from 'express';
import { prisma } from './db.js';


const app = express();

app.use(cors());
app.use(express.json());

app.get('/users', (req, res) => {
  res.send('Hello, World!');
});


app.get('/home', async (req, res) => {
  try {
        // const response = await axios.get('http://localhost:3000/rides');
        // console.log(response);
        const data = await prisma.rides.findMany();
        res.status(200).json(data)
        console.log(data);

  } catch (error) {
    console.error('erro ao buscar caronas', error)
    res.status(500).json({error: "Erro no servidor"});
  }
})



app.post('/create-ride', async (req, res) => {
  try {
    const { origin, destination, whatsapp, date, time, value } = req.body;

    await prisma.rides.create({
      data: {
        origin,
        destination,
        whatsapp,
        date,
        time,
        value,
        isRideRequest: false,
      },
    });
    res.status(201).json({ message: 'Carona cadastrada com sucesso!' });
    console.log('aaaa', data);
  } catch (error) {
    console.error('Error creating ride:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
);

app.post('/create-request-ride', async (req, res) => {
  try {
    const { origin, destination, whatsapp, date, time } = req.body;

    await prisma.rides.create({
      data: {
        origin,
        destination,
        whatsapp,
        date,
        time,
        isRideRequest: true
      }

    });

    res.status(201).json({ message: "solicitação de carona criada com sucesso!" })
    console.log(data)

  } catch (error) {
    console.error('Error creating ride:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
