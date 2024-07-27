import { Test, TestingModule } from '@nestjs/testing';
import { CommentMasterService } from './comment-master.service';

describe('CommentMasterService', () => {
  let service: CommentMasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentMasterService],
    }).compile();

    service = module.get<CommentMasterService>(CommentMasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
