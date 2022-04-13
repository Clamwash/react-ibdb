import { render, screen } from '@testing-library/react';
import { useEffect, useState } from 'react';
import BookItem from '../components/books/BookItem/BookItem';
import BookList from '../components/books/BookList/BookList';
import { Book } from '../models/Book';
import AllBooksPage from './AllBooks';

const [loadedBooks, setLoadedBooks] = useState([]);
useEffect(() => {
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

      setLoadedBooks(books);
      console.log(books);
    });
}, []);

describe('AllBooks Component', () => {
  it('should render book items', async () => {
    // Rendering BookList should be rafactored for testing purposes, so that data could be mocked
    render(<BookList books={loadedBooks} subjectName='test' />);

    // const bookElements = await AllBooksPage()

    const bookElements = await screen.findAllByTestId(/book-element/i);
    expect(bookElements.length).toEqual(1);
  });
});

describe('59892259', () => {
  let originFetch: any;
  beforeEach(() => {
    originFetch = (global as any).fetch;
  });
  afterEach(() => {
    (global as any).fetch = originFetch;
  });
  it('should pass', async () => {
    const fakeResponse = { title: 'example text' };
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes as any);
    (global as any).fetch = mockedFetch;
    render(<BookList books={loadedBooks} subjectName='test' />);
    const bookElements = await screen.findAllByTestId(/book-element/i);
    expect(bookElements.length).toEqual(1);
    expect(mockedFetch).toBeCalledTimes(1);
    expect(mRes.json).toBeCalledTimes(1);
  });
});
