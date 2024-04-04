import express, { Request, Response } from 'express';
import { TagService } from '../services/tags';
import { dataSource } from '../config/db';

const router = express.Router();

//router.get('/', validateBatch('read'), readHandler, respond);

const tagService = new TagService(dataSource);

router.get('/', async (req: Request, res: Response) => {
    return res.send(await tagService.getAll());
})

export default router;
