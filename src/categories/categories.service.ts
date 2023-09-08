import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCategoryDTO } from './create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.category.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.category.findUnique({
      where: { id: id }
    });
  }

  async create(category: CreateCategoryDTO) {
    return await this.prisma.category.create({
      data: { name: category.name }
    });
  }

  async delete(id: number) {
    return await this.prisma.category.delete({
      where: { id: id },
    });
  }

}