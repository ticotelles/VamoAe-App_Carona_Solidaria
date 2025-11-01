import cors from 'cors';
import express from 'express';
import { prisma } from './db.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/users', (req, res) => {
  res.send('Hello, World!');
});

app.get('/ride', async (req, res) => {
  try {
    
  const data = await prisma.ride.findMany();
  res.json(data);
    
  } catch (error) {
    console.error('Error fetching rides:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

});


app.post('/ride', (req, res) => {
  try {
    const data = req.body;
 
    prisma.ride.create({ data });
    res.status(201).json({ message: 'Ride created successfully' });
       console.log(data);
  } catch (error) {
    console.error('Error creating ride:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
);



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
