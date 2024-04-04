import { DataSource } from "typeorm"
import { Tag } from "../entities/tag"
import { Picture } from "../entities/picture"

export const dataSource = new DataSource({
    type: "sqlite",
    database: "data_.sqlite",
    entities: [Tag, Picture],
    logging: true,
    synchronize: true,
})