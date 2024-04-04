import express, { Request, Response } from 'express';
import { TagService } from '../services/tags';
import { PictureService } from '../services/pictures';
import { dataSource } from '../config/db';
import { Picture } from '../entities/picture';

const router = express.Router();

const pictureRepository = dataSource.getRepository(Picture);
const pictureService = new PictureService(pictureRepository);

router.get('/', async (req: Request, res: Response) => {
    return res.send(await pictureService.getAll());
})

export default router;
