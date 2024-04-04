import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, JoinTable } from "typeorm"
import { Tag } from "./tag"

@Entity()
export class Picture {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ default: ''})
    title: string

    @Column({ default: 'unknown'})
    type: string

    @Column({ default: '' })
    source: string

    @Column({ default: '' })
    meta: string

    @ManyToMany(() => Tag, {
        cascade: true,
    })
    @JoinTable()
    tags: Tag[]

    @CreateDateColumn()
    createdAt: Date;
}