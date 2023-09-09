import { Module } from '@nestjs/common';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories/categories.service';
import { PrismaService } from './prisma.service';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [],
  controllers: [CategoriesController, ProductsController],
  providers: [PrismaService, CategoriesService, ProductsService],
})
export class AppModule {}