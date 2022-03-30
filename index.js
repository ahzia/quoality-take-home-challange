import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express();

app.use(bodyParser.json());
const PORT = 5000;
mongoose.connect(
  process.env.DB_CONNECTION,
  () => console.log('DB connected'),
);
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
