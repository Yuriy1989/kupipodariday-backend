import { Length } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Wish {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(1, 250)
    name: string;

    @Column()
    link: string;

    @Column()
    image: string;

    @Column()
    price: number;

    @Column()
    raised: number;

    @Column()
    owner: string;

    @Column()
    @Length(1, 1014)
    description: string;

    @Column()
    offers: string;

    @Column()
    copied: number;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
}
