import { render, screen } from '@testing-library/react';
import BookItem from '../components/books/BookItem/BookItem';
import BookList from '../components/books/BookList/BookList';
import AllBooksPage from './AllBooks';

// const mockResponse = {
//     data: {
//       results: [
//         {
//           book: {
//             description:
//               'Good good book  Good good book Good good book Good good book Good good book Good good book Good good book ',
//             image:
//               'https://images-na.ssl-images-amazon.com/images/I/91ocU8970hL.jpg',
//             title: 'Harry Potter',
//           },
//         },
//       ],
//     },
//   };
  
//   export default {
//     get: jest.fn().mockResolvedValue(mockResponse)
//   };

  describe('AllBooks Component', () => {
    it('should render book items', async () => {
        render(<BookItem/>)

        // const bookElements = await AllBooksPage()
  
        const bookElements = await screen.findAllByTestId(/book-element/i)
        expect(bookElements.length).toEqual(1)
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
       render(<BookItem/>);
      const bookElements = await screen.findAllByTestId(/book-element/i)
        expect(bookElements.length).toEqual(1)
      expect(mockedFetch).toBeCalledTimes(1);
      expect(mRes.json).toBeCalledTimes(1);
    });
  });