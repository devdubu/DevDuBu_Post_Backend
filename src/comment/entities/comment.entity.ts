import { Entity } from "typeorm";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "comment" })
export class Comment {
  @PrimaryGeneratedColumn()
  CommentId: number;

  @Column()
  CommentMasterId: number;

  @Column()
  PostId: number;

  @Column()
  CategoryId: number;

  @Column()
  UserId: string;

  @Column()
  content: string;

  @Column()
  ReferenceField1: string;

  @Column()
  ReferenceField2: string;

  @Column()
  ReferenceField3: string;

  @Column()
  ReferenceField4: string;

  @Column()
  ReferenceField5: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
