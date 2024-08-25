import { Module } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { CommentController } from "./comment.controller";
import { CommentEntity } from "./entities/comment.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
@Module({
  controllers: [CommentController],
  providers: [CommentService],
  imports: [TypeOrmModule.forFeature([CommentEntity])],
})
export class CommentModule {}
