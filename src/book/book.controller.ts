import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  @Get()
  getALl() {
    return this.bookService.getAllBooks();
  }
  @Get(':id')
  getSingleBook(@Param('id') id: string) {
    return this.bookService.getBookById(Number(id));
  }

  @Post()
  create(@Body() body: { name: string; details: string }) {
    return this.bookService.createBook(body);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body: { name: string; details: string },
  ) {
    return this.bookService.updateBook(Number(id), body);
  }

  @Patch(':id')
  pathch(
    @Param('id') id: string,
   @Body() body: Partial<{ name: string; details: string }>,
  ) {
    return this.bookService.patchUpdate(Number(id), body);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    return this.bookService.deleteBook(Number(id));
  }
}
