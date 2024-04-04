import express, { Request, Response } from 'express';
import morgan from 'morgan';
import { dataSource } from './config/db'
import tagsRouter from './controllers/tags'
import picturesRouter from './controllers/pictures'

const app = express();
const PORT = process.env.PORT || 3000;

const loggerMiddleware = morgan('dev');

app.use(loggerMiddleware);

app.use('/tags', tagsRouter);
app.use('/pictures', picturesRouter);

app.use(express.json());

dataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
