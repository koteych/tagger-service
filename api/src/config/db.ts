import { DataSource } from "typeorm"
import { Tag } from "../entities/tag"

export const dataSource = new DataSource({
    type: "sqlite",
    database: "data_.sqlite",
    entities: [Tag],
    logging: true,
    synchronize: true,
})