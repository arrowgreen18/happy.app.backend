import express from 'express';
import 'express-async-errors';
import './database/connection';
import routes from './routes';
import path from 'path';
import cors from 'cors';
import handlerError from './errors/handler';


const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.use(handlerError);





app.listen(3333);