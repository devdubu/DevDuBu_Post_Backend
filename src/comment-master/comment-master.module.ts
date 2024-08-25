import { Module } from "@nestjs/common";
import { CommentMasterService } from "./comment-master.service";
import { CommentMasterController } from "./comment-master.controller";
import { CommentMasterEntity } from "./entities/comment-master.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  controllers: [CommentMasterController],
  providers: [CommentMasterService],
  imports: [TypeOrmModule.forFeature([CommentMasterEntity])],
})
export class CommentMasterModule {}
