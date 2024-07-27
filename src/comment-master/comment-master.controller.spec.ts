import { Test, TestingModule } from '@nestjs/testing';
import { CommentMasterController } from './comment-master.controller';
import { CommentMasterService } from './comment-master.service';

describe('CommentMasterController', () => {
  let controller: CommentMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentMasterController],
      providers: [CommentMasterService],
    }).compile();

    controller = module.get<CommentMasterController>(CommentMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
