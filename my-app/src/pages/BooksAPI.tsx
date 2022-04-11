import { useEffect, useState } from 'react';
import BookList from '../components/books/BookList/BookList';

function BooksAPIpage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Needs refactoring
    // Combining multiple fetch requests
    Promise.all([
      fetch(`https://openlibrary.org/subjects/biography.json`),
      fetch(`https://openlibrary.org/subjects/architecture.json`),
      fetch(`https://openlibrary.org/subjects/history.json`),
    ])
      .then((responses) => {
        // Get a JSON object from each of the responses
        return Promise.all(
          responses.map((response) => {
            return response.json();
          })
        );
      })
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(books);
  }, []);

  return (
    <section>
      {books.map(
        (booksBySubject) => (
          console.log(booksBySubject),
          (
            <BookList
              key={booksBySubject.key}
              books={booksBySubject.works}
              subjectName={booksBySubject.name}
            />
          )
        )
      )}
    </section>
  );
}
export default BooksAPIpage;
