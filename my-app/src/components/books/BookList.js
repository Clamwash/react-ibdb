import BookItem from './BookItem';
import classes from './BookListStyle.module.css'

function BookList(props) {
  return (
    <ul className={classes.list}>
      {props.books.map((book) => (
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
