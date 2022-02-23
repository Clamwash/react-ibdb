import { useEffect, useState } from 'react';
import BookList from '../components/books/BookList';

function AllBooksPage() {
  const [isLoading, setIsLoading] = useState(false)

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
    setIsLoading(true)
    fetch('https://react-ibdb-default-rtdb.firebaseio.com/books.json')
      .then((response) => response.json())
      .then((data) => {
        const books = [];
        for (const key in data) {
          const book = {
            id: key,
            ...data[key],
          };
          books.push(book);
        }
        setIsLoading(false)
        setLoadedBooks(books);
      });
  }, []);

  if (isLoading) {
    return(
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  return (
    <section>
      <h1>All Books</h1>
      <BookList books={loadedBooks} />
    </section>
  );
}

export default AllBooksPage;
