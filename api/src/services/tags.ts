import { DataSource } from 'typeorm';
//import { dataSource } from '../config/db';
import { Tag } from '../entities/tag';
import { Repository } from 'typeorm';

export class TagService {
    private tagRepository: Repository<Tag>;

    constructor(private readonly db: DataSource) {
        this.db = db;
        this.tagRepository = db.manager.getRepository(Tag);
    }

    async getAll(): Promise<Tag[]> {
        return this.tagRepository.find();
    }

    async createTag(name: string): Promise<Tag> {
        const tag = new Tag();

        tag.name = name;

        return this.tagRepository.save(tag);
    }
}