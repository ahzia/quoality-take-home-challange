import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import chainsRoutes from './routes/chains.js';
import hotelsRoute from './routes/hotels.js';
import servicesRoute from './routes/services.js';
import guestsRoute from './routes/guests.js';

const app = express();

app.use(bodyParser.json());
app.use('/chains', chainsRoutes);
app.use('/hotels', hotelsRoute);
app.use('/services', servicesRoute);
app.use('/guests', guestsRoute);

const PORT = 5000;
try {
  mongoose.connect(
    process.env.DB_CONNECTION,
    () => console.log('DB connected'),
  );
} catch (err) {
  console.log(err);
}
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
