import { Module } from '@nestjs/common';
import { CategorysService } from './categorys.service';
import { CategorysController } from './categorys.controller';
import { CategoryEntity } from './entities/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CategorysController],
  providers: [CategorysService],
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
})
export class CategorysModule {}
