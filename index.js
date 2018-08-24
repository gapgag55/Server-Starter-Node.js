import express from 'express';
import config from './config';
import connectMiddlewares from './middlewares';
import connectMongoose from './services/mongoose';
import api from './api';

const app = express();

connectMiddlewares(app);
connectMongoose();

app.use('/api', api);

app.listen(config.port, () => {
  console.log(`Listening to: ${config.port}`)
})