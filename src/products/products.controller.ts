import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './create-product.dto';

@Controller('products')
export class ProductsController {

  constructor(private productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(parseInt(id));
  }

  @Post()
  create(@Body() product: CreateProductDTO) {
    return this.productsService.create(product);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productsService.delete(parseInt(id));
  }
  

}