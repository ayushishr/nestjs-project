/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from '../schema/Book';
import { BooksController } from './book.controller';
import { BooksService } from './book.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }])],
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService], 
})
export class BookModule {}

