import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import swaggerUi from 'swagger-ui-express';
import { createRequire } from 'module';
import chainsRoutes from './routes/chains.js';
import hotelsRoute from './routes/hotels.js';
import servicesRoute from './routes/services.js';
import guestsRoute from './routes/guests.js';

const require = createRequire(import.meta.url);
const swaggerFile = require('./swagger_output.json');

const app = express();

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(bodyParser.json());
app.use('/chains', chainsRoutes);
app.use('/hotels', hotelsRoute);
app.use('/services', servicesRoute);
app.use('/guests', guestsRoute);

const PORT = 5000;
mongoose.connect(
  process.env.DB_CONNECTION,
  () => console.log('DB connected'),
);
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
