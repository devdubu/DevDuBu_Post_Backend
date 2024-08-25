import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CategorysModule } from "./categorys/categorys.module";
import { PostsModule } from "./posts/posts.module";
import { CommentMasterModule } from "./comment-master/comment-master.module";
import { CommentModule } from "./comment/comment.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import "dotenv";
import { typeORMConfig } from "config/typeorm.config";
@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    CategorysModule,
    PostsModule,
    CommentMasterModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
