import { useNavigate } from 'react-router-dom';
import NewBookForm from '../components/books/NewBookForm/NewBookForm';
import { Book } from '../models/Book';

const NewBooksPage = () => {
  const navigate = useNavigate();

  return (
    <section>
      <h1>Add New Book</h1>
      <NewBookForm />
    </section>
  );
};

export default NewBooksPage;
