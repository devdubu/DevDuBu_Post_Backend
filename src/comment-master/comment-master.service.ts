import { Injectable } from '@nestjs/common';
import { CreateCommentMasterDto } from './dto/create-comment-master.dto';
import { UpdateCommentMasterDto } from './dto/update-comment-master.dto';

@Injectable()
export class CommentMasterService {
  create(createCommentMasterDto: CreateCommentMasterDto) {
    return 'This action adds a new commentMaster';
  }

  findAll() {
    return `This action returns all commentMaster`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commentMaster`;
  }

  update(id: number, updateCommentMasterDto: UpdateCommentMasterDto) {
    return `This action updates a #${id} commentMaster`;
  }

  remove(id: number) {
    return `This action removes a #${id} commentMaster`;
  }
}
