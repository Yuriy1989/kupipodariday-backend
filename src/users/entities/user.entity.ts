import { IsEmail, IsInt, Length, Min } from 'class-validator';
import { Wish } from 'src/wishes/entities/wish.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @IsInt()
  @Min(0)
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @Length(2, 30)
  username: string;

  @Column({ default: 'Пока ничего не рассказал о себе' })
  @Length(2, 30)
  about: string;

  @Column({ default: 'https://i.pravatar.cc/300' })
  avatar: string;

  @IsEmail({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Wish, (wish) => wish.owner)
  wishes: Wish[];

  // @Column()
  // offers: string;

  // @Column()
  // wishlists: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
