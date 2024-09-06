import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './entities/post.entity';
import { transResForm } from 'utils/response';

@Injectable()
export class PostsService {
  @InjectRepository(PostEntity) private postRepository: Repository<PostEntity>;
  constructor(private dataSource: DataSource) {}

  async create(createPostDto: CreatePostDto) {
    console.log(createPostDto);
    const post = await this.postRepository.insert(createPostDto);

    return transResForm(post);
  }

  async findAll() {
    const post = await this.postRepository.findAndCount();
    return post;
  }

  async findOne(id: number, category: string): Promise<object> {
    // if (category === "all") {
    const post = await this.postRepository.find();
    // }

    return post;
  }

  async update(id: { PostId: number }, updatePostDto: UpdatePostDto) {
    const post = await this.postRepository.update(id, { ...updatePostDto });
    return post;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
