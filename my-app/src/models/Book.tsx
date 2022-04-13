export class Book {
  key?: string;
  id?: string;
  title: string;
  author?: string;
  image: string;
  cover_id?: number;
  description: string;

  constructor(
    key: string,
    id: string,
    title: string,
    author: string,
    cover_id: number,
    description: string
  ) {
    this.key = key;
    this.id = id;
    this.title = title;
    this.author = author;
    this.cover_id = cover_id;
    this.description = description;
  }
}
