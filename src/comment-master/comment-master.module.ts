import { Module } from '@nestjs/common';
import { CommentMasterService } from './comment-master.service';
import { CommentMasterController } from './comment-master.controller';

@Module({
  controllers: [CommentMasterController],
  providers: [CommentMasterService],
})
export class CommentMasterModule {}
