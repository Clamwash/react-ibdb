import { useEffect, useState } from 'react';
import BookList from '../components/books/BookList/BookList';
import { Book } from '../models/Book';

type ResponseData = {
  key: string,
  works: Book[],
  name: string
}

const BooksAPIpage = () => {
  const [books, setBooks] = useState<ResponseData[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>();

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
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
        );
      })
      .then((data: ResponseData[]) => {
        setIsLoaded(true);
        setBooks(data);
      }, (error: Error) => {
        setError(error)
      })
  }, []);

  if (error) {
    return <div>Error: {error.message ? error.message : 'Could not fetch the data'}</div>;
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
      {books.map(
        (booksBySubject) => (
          console.log(books),
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
};
export default BooksAPIpage;
