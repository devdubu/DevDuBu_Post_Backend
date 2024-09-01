import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { PostEntity } from "./entities/post.entity";

@Injectable()
export class PostsService {
  @InjectRepository(PostEntity) private postRepository: Repository<PostEntity>;
  constructor(private dataSource: DataSource) {}

  create(createPostDto: CreatePostDto) {
    return "This action adds a new post";
  }

  findAll() {
    return `This action returns all posts`;
  }

  async findOne(id: number, category: string): Promise<object> {
    // if (category === "all") {
    const post = await this.postRepository.find();
    // }

    return post;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
