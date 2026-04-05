import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
    getProducts(){
        return "Products fetched successfully"
    }
}
