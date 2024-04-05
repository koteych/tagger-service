import express, { Request, Response } from 'express';
import { TagService } from '../services/tags';
import { dataSource } from '../config/db';

const router = express.Router();

//router.get('/', validateBatch('read'), readHandler, respond);

const tagService = new TagService(dataSource);

router.get('/', async (req: Request, res: Response) => {
    return res.send(await tagService.getAll());
})

router.get('/:id', async (req: Request, res: Response) => {
    return res.send(await tagService.getAll());
})

router.post('/', async (req: Request, res: Response) => {
    res.send('ok');
})

router.put('/:id', async (req: Request, res: Response) => {
    res.send(req.params.id);
})

router.delete('/:id', async (req: Request, res: Response) => {
    res.send(req.params.id);
});

// Get all entities annotated by this tag (?type=picture)
router.get('/:id/entities', async (req: Request, res: Response) => {
    res.send(req.params.id);
})

export default router;
