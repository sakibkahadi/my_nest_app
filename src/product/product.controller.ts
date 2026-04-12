import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('product')
export class ProductController {
  // for using services in controller we need constructor
  constructor(private readonly productService: ProductService) {}
  @Get()
  @UseGuards(AuthGuard)
  getProducts() {
    return this.productService.getAllProducts();
  }

//   for single :id 
  @Get(":id")
//   param alawys id string akare dibe but kajer jonno type casting use kore convert kore nibo
  getProduct(@Param("id") id:string){
    return this.productService.getProductById(Number(id))
  }
}
