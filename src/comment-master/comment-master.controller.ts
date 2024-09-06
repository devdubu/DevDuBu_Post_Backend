import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommentMasterService } from './comment-master.service';
import { CreateCommentMasterDto } from './dto/create-comment-master.dto';
import { UpdateCommentMasterDto } from './dto/update-comment-master.dto';

@Controller('comment-master')
export class CommentMasterController {
  constructor(private readonly commentMasterService: CommentMasterService) {}

  @Post()
  create(@Body() createCommentMasterDto: CreateCommentMasterDto) {
    return this.commentMasterService.create(createCommentMasterDto);
  }

  @Get()
  findAll() {
    return this.commentMasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentMasterService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCommentMasterDto: UpdateCommentMasterDto,
  ) {
    return this.commentMasterService.update(+id, updateCommentMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentMasterService.remove(+id);
  }
}
