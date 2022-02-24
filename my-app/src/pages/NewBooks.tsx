import { useNavigate } from 'react-router-dom';
import NewBookForm from '../components/books/NewBookForm';
import { Book } from '../interfaces/Models';

function NewBooksPage() {
  const navigate = useNavigate();

  function addBookHandler(bookData: Book) {
    fetch('https://react-ibdb-default-rtdb.firebaseio.com/books.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    })
      .then((data) => {
        console.log('Success:', data);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <section>
      <h1>Add New Book</h1>
      <NewBookForm onAddBook={addBookHandler} />
    </section>
  );
}

export default NewBooksPage;
