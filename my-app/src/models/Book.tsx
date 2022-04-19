export class Book {
  key?: string;
  id?: string;
  title: string;
  authors?: any;
  image: string;
  cover_id?: number;
  description: string;

  constructor(
    key: string,
    id: string,
    title: string,
    authors: any,
    cover_id: number,
    description: string
  ) {
    this.key = key;
    this.id = id;
    this.title = title;
    this.authors = authors;
    this.cover_id = cover_id;
    this.description = description;
  }
}
