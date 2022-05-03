import { useEffect, useState } from 'react';
import BookItem from '../components/books/BookList/BookItem/BookItem';
import BookList from '../components/books/BookList/BookList';
import Filters from '../components/books/Filters/Filters';
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
  const [searchInput, setSearchInput] = useState('');

  const filteredBooks: Book[] = [];

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

  const searchByTitleHandler = (searchInput: string) => {
    setSearchInput(searchInput);
  };

  const filterByTitle = books.flatMap((booksByCategory) => {
    return booksByCategory.works.filter((book) => {
      if (
        searchInput.length !== 0 &&
        book.title.toLowerCase().includes(searchInput)
      ) {
        let foundBooks = [];
        foundBooks.push(book);
        for (const row of foundBooks) {
          if (filteredBooks.find((book) => book.cover_id === row.cover_id))
            continue;
          filteredBooks.push(row);
          return filteredBooks;
        }
      }
    });
  });

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
    <div>
      <Filters
        onSearchByTitle={searchByTitleHandler}
        onFilterByCategory={categorySelectHandler}
      />

      <section>
        {!searchInput &&
          filterByCategory.map((booksByCategory) => {
            return (
              <BookList
                key={booksByCategory.key}
                books={booksByCategory.works}
                subjectName={booksByCategory.name}
              />
            );
          })}
        {searchInput &&
          filterByTitle.map((book) => {
            if (book) {
              return (
                <BookItem
                  data-testid='book-element'
                  key={book.id ? book.id : Math.random().toString()} // Refactor: leave only book.key,    used math.random() because some books belong to multiple categories
                  image={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`}
                  title={book.title}
                  authors={book.authors[0].name}
                  description={book.description}
                />
              );
            }
          })}
      </section>
    </div>
  );
};
export default BooksAPIpage;
