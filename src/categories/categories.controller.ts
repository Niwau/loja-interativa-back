import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDTO } from './create-category.dto';

@Controller('categories')
export class CategoriesController {

  constructor(private categoriesService: CategoriesService) {}

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(parseInt(id));
  }

  @Post()
  create(@Body() category: CreateCategoryDTO) {
    return this.categoriesService.create(category);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.categoriesService.delete(parseInt(id));
  }

}