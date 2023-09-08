import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProductDTO } from './create-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.product.findUnique({
      where: { id: id }
    })
  }
  
  async create(product: CreateProductDTO) {
    return await this.prisma.product.create({
      data: {
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        category: {
          connect: { id: product.categoryId }
        }    
      }
    });
  }

  async delete(id: number) {
    return await this.prisma.product.delete({
      where: { id: id },
    });
  }
  
}
