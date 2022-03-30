import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import 'dotenv/config';
import chainsRoutes from './routes/chain.js';
import hotelsRoute from './routes/hotel.js';

const app = express();

app.use(bodyParser.json());
app.use('/chains', chainsRoutes);
app.use('/hotels', hotelsRoute);
const PORT = 5000;
mongoose.connect(
  process.env.DB_CONNECTION,
  () => console.log('DB connected'),
);
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
