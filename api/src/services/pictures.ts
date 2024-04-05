import { DataSource, Repository } from 'typeorm';
import { Tag } from '../entities/tag';
import { Picture } from '../entities/picture';
import { ITag } from '../types';

export class PictureService {
    constructor(
        private readonly pictureRepository: Repository<Picture>,
        private readonly tagRepository: Repository<Tag>
    ) {
        this.pictureRepository = pictureRepository;
        this.tagRepository = tagRepository;
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

    async addTag(pictureId: number, tagFields: ITag): Promise<void> {
        const picture = await this.pictureRepository.findOne({
            where: {
                id: pictureId
            }, relations: {
                tags: true
            }
        });

        if (!picture) return;

        const tag = new Tag();

        tag.name  = tagFields.name;
        tag.alias = tagFields.alias;
        tag.meta  = tagFields.meta;

        picture.tags.push(tag);
        this.pictureRepository.save(picture);
    }

    async assignTag(pictureId: number, tagId: number): Promise<void> {
        const tag = await this.tagRepository.findOne({
            where: {
                id: tagId
            }
        });

        if (!tag) return;

        const picture = await this.pictureRepository.findOne({
            where: {
                id: pictureId
            }, relations: {
                tags: true
            }
        });

        // if tag already added
        if (picture.tags.some((t) => t.id === tag.id)) return;

        picture.tags.push(tag);
        this.pictureRepository.save(picture);
    }

    async removeTag(pictureId: number, tagId: number): Promise<void> {
        const picture = await this.pictureRepository.findOne({
            where: {
                id: pictureId
            }, relations: {
                tags: true
            }
        });

        picture.tags = picture.tags.filter(t => t.id !== tagId);
        this.pictureRepository.save(picture);
    }
}