import { useEffect, useState } from 'react';
import BookList from '../components/books/BookList/BookList';
import CategorySelector from '../components/books/CategorySelector/CategorySelector';
import { Book } from '../models/Book';

type ResponseData = {
  key: string;
  works: Book[];
  name: string;
};

const BooksAPIpage = () => {
  const [books, setBooks] = useState<ResponseData[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>();

  const [selectedCategory, setSelectedCategory] = useState('all');

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
      .then(
        (data: ResponseData[]) => {
          setIsLoaded(true);
          setBooks(data);
        },
        (error: Error) => {
          setError(error);
        }
      );
  }, []);

  const categorySelectHandler = (category: string) => {
    setSelectedCategory(category);
  };

  const filterByCategory = books.filter((booksByCategory) => {
    return selectedCategory === 'all'
      ? books
      : booksByCategory.name === selectedCategory;

  });

  if (error) {
    return (
      <div>
        Error: {error.message ? error.message : 'Could not fetch the data'}
      </div>
    );
  }
  if (!isLoaded) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    console.log(filterByCategory),
    (
      <div>
        <CategorySelector onCategorySelected={categorySelectHandler} />

        <section>
          {filterByCategory.map(
            (booksByCategory) => (
              console.log(books),
              (
                <BookList
                  key={booksByCategory.key}
                  books={booksByCategory.works}
                  subjectName={booksByCategory.name}
                />
              )
            )
          )}
        </section>
      </div>
    )
  );
};
export default BooksAPIpage;
