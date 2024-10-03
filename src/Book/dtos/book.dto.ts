/* eslint-disable prettier/prettier */
export class CreateBookDto {
    readonly title: string;
    readonly author: string;
    readonly published: Date;
  }
  
  export class UpdateBookDto {
    readonly title?: string;
    readonly author?: string;
    readonly published?: Date;
  }
  