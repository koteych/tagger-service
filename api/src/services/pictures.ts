import { DataSource, Repository } from 'typeorm';
import { Tag } from '../entities/tag';
import { Picture } from '../entities/picture';

export class PictureService {
    constructor(private readonly pictureRepository: Repository<Picture>) {
        this.pictureRepository = pictureRepository;
    }

    async getAll(): Promise<Picture[]> {
        return this.pictureRepository.find({
            relations: {
                tags: true,
            },
        });
    }

    async createPicture(name: string): Promise<Picture> {
        const picture = new Picture();

        picture.title = 'some picture';

        return this.pictureRepository.save(picture);
    }
}