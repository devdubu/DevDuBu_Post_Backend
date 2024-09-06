import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentMasterDto } from './create-comment-master.dto';

export class UpdateCommentMasterDto extends PartialType(
  CreateCommentMasterDto,
) {}
