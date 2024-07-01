import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
import colors from 'colors';

import weatherRoute from './routes/weatherRoute.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get('/', (req, res) => {
  res.send("nav to '/api/hello?visitor_name' ");
});

app.use('/', weatherRoute);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 6000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`.yellow);
});
