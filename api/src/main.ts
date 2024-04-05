import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import { dataSource } from './config/db'
import tagsRouter from './controllers/tags'
import picturesRouter from './controllers/pictures'

import { HttpError } from './types/errors';

export const errorHandler = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    if (error instanceof HttpError) {
        res.status(error.status).json({ error: error.message });
    } else {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const app = express();
const PORT = process.env.PORT || 3000;

const loggerMiddleware = morgan('dev');

app.use(express.json());
app.use(loggerMiddleware);

app.use('/tags', tagsRouter);
app.use('/pictures', picturesRouter);

app.use(errorHandler);

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
