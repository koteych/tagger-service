import express, { Request, Response } from 'express';
import { TagService } from '../services/tags';
import { PictureService } from '../services/pictures';
import { dataSource } from '../config/db';
import { Picture } from '../entities/picture';
import {Tag} from '../entities/tag';

const router = express.Router();

const pictureRepository = dataSource.getRepository(Picture);
const tagRepository = dataSource.getRepository(Tag);

const pictureService = new PictureService(pictureRepository, tagRepository);

router.get('/', async (req: Request, res: Response) => {
    return res.send(await pictureService.getAll());
})

router.post('/:id/add-tag/:tid', async (req: Request, res: Response) => {
    const pictureId = Number(req.params.id);
    const tagId     = Number(req.params.tid);

    pictureService.addTag(pictureId, tagId);
    return res.send({ok: 200});
})

router.post('/:id/remove-tag/:tid', async (req: Request, res: Response) => {
    const pictureId = Number(req.params.id);
    const tagId     = Number(req.params.tid);

    pictureService.removeTag(pictureId, tagId);
    return res.send({ok: 200});;
})


export default router;
