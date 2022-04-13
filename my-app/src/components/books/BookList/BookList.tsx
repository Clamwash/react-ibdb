import { Book } from '../../../models/Book';
import BookItem from '../BookItem/BookItem';
import './BookListStyle.css';

const BookList: React.FC<{books: Book[], subjectName: string}> = (props) => {
  let id = 0

  return (
    <ul className='list'>
      <h1 className='listTitle'>{props.subjectName}</h1>
      {props.books.map(
        (book: Book) => (
          id++,
          (
            <BookItem
              data-testid='book-element'
              key={book.id ? book.id : book.key} // Refactor: leave only book.key
              // id={book.id ? book.id : book.key}
              image={
                book.image
                  ? book.image
                  : `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
              }
              title={book.title}
              author={book.author}
              description={book.description}
            />
          )
        )
      )}
    </ul>
  );
}

export default BookList;
