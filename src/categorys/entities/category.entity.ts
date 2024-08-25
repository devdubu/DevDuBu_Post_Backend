import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
@Entity({ name: "category" })
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  CategoryId: number;

  @Column()
  UserId: number;

  @Column()
  title: string;

  @Column()
  upperCategoryId: number;

  @Column()
  description: string;

  @Column()
  sequence: string;

  @Column()
  icon: string;

  @Column()
  isUse: string;

  @Column()
  ReferenceField1: string;

  @Column()
  ReferenceField2: string;

  @Column()
  ReferenceField3: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
