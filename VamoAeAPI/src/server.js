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

    const newRide = await prisma.rides.create({
      data: {
        origin,
        destination,
        whatsapp,
        date,
        time,
        value: value ? parseInt(value) : null, 
        isRideRequest: false,
      },
    });

   
    res.status(201).json({ message: 'Carona cadastrada com sucesso!', newRide });
    console.log(' Carona criada:', newRide);

  } catch (error) {
    console.error(' Error creating ride:', error);
  
    if (!res.headersSent) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});


app.post('/create-request-ride', async (req, res) => {
  try {
    const { origin, destination, whatsapp, date, time } = req.body;

      
   const newRequestRide = await prisma.rides.create({
      data: {
        origin,
        destination,
        whatsapp,
        date,
        value: null,
        time,
        isRideRequest: true
      }

    });

    res.status(201).json({ message: "solicitação de carona criada com sucesso!", newRequestRide })
    console.log('create-request-ride',newRequestRide)

  } catch (error) {
    console.error('Error creating ride:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
