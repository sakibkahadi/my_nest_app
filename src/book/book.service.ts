import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BookService {
  private Books = [
    { id: 1, name: 'DLS', details: 'THis sdf' },
    { id: 2, name: 'Dun', details: 'run t he de' },
  ];
  getAllBooks() {
    return this.Books;
  }
  getBookById(id: number) {
    const book = this.Books.find((b) => b.id === id);
    if (!book) throw new NotFoundException('Book is not found');
    return book;
  }

  createBook(data: { name: string; details: string }) {
    const newBook = {
      id: Date.now(),
      ...data,
    };
    this.Books.push(newBook);
    return newBook
  }

  updateBook(id:number, data:{name:string, details:string}){
    const index = this.Books.findIndex(b=>b.id === id);
    if(index === -1){
        throw new NotFoundException("Book is not exist")
    }
    this.Books[index] = {id,...data};
    return this.Books[index];
  }

  patchUpdate(id:number,data:Partial<{name:string, details:string}>){
    const book = this.getBookById(id);
     Object.assign(book,data);
     return book;
  }

  deleteBook(id:number){
    const index = this.Books.findIndex(b=>b.id === id);
    if(index === -1){
        throw new NotFoundException("Book is not exist")
    }

    // splice arrya akare return korbe
   const deleted =  this.Books.splice(index,1)
   return {message:"Deleted book successfully", book:deleted[0]}
  }
}
