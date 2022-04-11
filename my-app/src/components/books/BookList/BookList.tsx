import { Book } from '../../../interfaces/Models';
import BookItem from '../BookItem/BookItem';
import './BookListStyle.css';

function BookList(props: any) {
  let id = 0

  

  return (
    <ul className='list'>
      <h1 className='listTitle'>{props.subjectName}</h1>
      {props.books.map(
        (book: Book) => (
          id++,
          console.log(id),
     
          console.log(props),
          (
            <BookItem
              data-testid='book-element'
              key={book.id ? book.id : book.key}
              id={book.id ? book.id : book.key}
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
