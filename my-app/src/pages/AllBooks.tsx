import { useEffect, useState } from 'react';
import BookList from '../components/books/BookList/BookList';
import { Book } from '../models/Book';

const AllBooksPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>();
  const [loadedBooks, setLoadedBooks] = useState([]);

  // const DUMMY_DATA = [
  //   {
  //     id: 'b1',
  //     title: 'This is a first book',
  //     price: 12.99,
  //     image:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKz3FZKTiDZBfqmSG0SKT9Kz4bNiZ0yb7-gA&usqp=CAU',
  //     description: 'Lorem ipsum dolor samet kazkas tokio',
  //   },
  //   {
  //     id: 'b2',
  //     title: 'This is a first book',
  //     price: 12.99,
  //     image:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKz3FZKTiDZBfqmSG0SKT9Kz4bNiZ0yb7-gA&usqp=CAU',
  //     description: 'Lorem ipsum dolor samet kazkas tokio',
  //   },
  // ];

  useEffect(() => {
    fetch('https://react-ibdb-default-rtdb.firebaseio.com/books.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(
        (data: Book[]) => {
          const books: Book[] = [];

          // DB-CHECK
          // for (const key in data) {
          //   const book = {
          //     id: key,
          //     ...data[key],
          //   };

          //   books.push(book);
          // }

          // DB-CHECK To check if it's working when db is back
          data.map((item) => {
            const book = new Book(
              item.key,
              item.id,
              item.title,
              item.author,
              item.cover_id,
              item.description
            );

            books.push(book);
          });

          setIsLoaded(true);
          setLoadedBooks(books);
          console.log(books);
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message};</div>;
  }
  if (!isLoaded) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Books</h1>
      <BookList books={loadedBooks} subjectName='My books' />
    </section>
  );
};

export default AllBooksPage;
