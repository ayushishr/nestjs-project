/* eslint-disable prettier/prettier */
// schema/Book.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
    @Prop({ required: true }) 
    title: string;

    @Prop({ required: true }) 
    author: string;

    @Prop({ required: true }) 
    published: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);
