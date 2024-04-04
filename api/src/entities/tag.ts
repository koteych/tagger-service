import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class Tag {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ default: '' })
    alias: string

    @Column({ default: '' })
    meta: string

    @CreateDateColumn()
    createdAt: Date;
}