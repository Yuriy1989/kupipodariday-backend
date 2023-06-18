import { IsInt, IsString, IsUrl, Length, Min } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Offer } from '../../offers/entities/offer.entity';

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

  @Column()
  @IsUrl()
  link: string;

  @Column()
  @IsUrl()
  image: string;

  @IsInt()
  @Column()
  price: number;

  @IsInt()
  @Column({ default: 0 })
  raised: number;

  @ManyToMany(() => User, (user) => user.wishes)
  @JoinTable()
  owner: User[];

  @IsString()
  @Column()
  @Length(1, 1024)
  description: string;

  @ManyToOne(() => Offer, (offer) => offer.item)
  offers: Offer[];

  @IsInt()
  @Column({ default: 0 })
  copied: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
