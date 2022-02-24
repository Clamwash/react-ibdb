import { Book } from '../../interfaces/Models';
import BookItem from './BookItem';
import './BookListStyle.css'

function BookList(props: any) {
  return (
    <ul className="list">
      {props.books.map((book: Book) => (
        <BookItem
          key={book.id}
          id={book.id}
          image={book.image}
          title={book.title}
          description={book.description}
        />
      ))}
    </ul>
  );
}

export default BookList;
