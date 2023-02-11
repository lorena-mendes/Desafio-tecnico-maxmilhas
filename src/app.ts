import express from 'express';
import cpfRouter from './routes/cpf.routes';

const app = express();

app.use(express.json());

app.use('/', cpfRouter);

export default app;
