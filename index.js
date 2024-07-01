import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import customEnv from './customEnv.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
import colors from 'colors';

import weatherRoute from './routes/weatherRoute.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/', weatherRoute);

app.use(notFound);
app.use(errorHandler);

const port = customEnv.port || 6000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`.yellow);
});
