import express, { Request, Response } from 'express';
import { dataSource } from './config/db'
import tagsRouter from './controllers/tags'

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/tags', tagsRouter);

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
