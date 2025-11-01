import cors from 'cors';
import express from 'express';
import { prisma } from './db.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/users', (req, res) => {
  res.send('Hello, World!');
});

app.get('/createRide', async (req, res) => {
  try {
    
  const data = await prisma.createRide.findMany();
  res.json(data);
    
  } catch (error) {
    console.error('Error fetching rides:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

});


app.post('/createRide', async (req, res) => {
  try {
    const data = req.body;

    await prisma.createRide.create({ data });
    res.status(201).json({ message: 'Ride created successfully' });
       console.log('aaaa',data);
  } catch (error) {
    console.error('Error creating ride:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
);



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
