import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router';
import { Book } from '../../../models/Book';
import Card from '../../ui/Card';

import './NewBookFormStyle.css';

const NewBookForm: React.FC = () => {
  const navigate = useNavigate();
  const titleInputRef = useRef<HTMLInputElement>();
  const imageInputRef = useRef<HTMLInputElement>();
  const descriptionInputRef = useRef<HTMLTextAreaElement>();

  const addBookHandler = (bookData: Book) => {
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
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const bookData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
    };
    addBookHandler(bookData);
  };

  return (
    <Card>
      <form className='form' onSubmit={submitHandler}>
        <div className='control'>
          <label htmlFor='title'>Book Title</label>
          <input required type='text' id='title' ref={titleInputRef} />
        </div>
        <div className='control'>
          <label htmlFor='image'>Book Image</label>
          <input required type='url' id='image' ref={imageInputRef} />
        </div>
        <div className='control'>
          <label htmlFor='description'>Description</label>
          <textarea
            required
            id='description'
            rows={5}
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className='actions'>
          <button>Add Book</button>
        </div>
      </form>
    </Card>
  );
};

export default NewBookForm;
