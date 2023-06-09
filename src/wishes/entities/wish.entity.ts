import { IsInt, IsString, Length, Min } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Wish {
  @IsInt()
  @Min(0)
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column()
  @Length(1, 250)
  name: string;

  @IsString()
  @Column()
  link: string;

  @IsString()
  @Column()
  image: string;

  @IsInt()
  @Column()
  price: number;

  @IsInt()
  @Column()
  raised: number;

  // @IsString()
  // @Column()
  // owner: string;

  @IsString()
  @Column()
  @Length(1, 1014)
  description: string;

  // @IsString()
  // @Column()
  // offers: string;

  // @IsInt()
  // @Column()
  // copied: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
