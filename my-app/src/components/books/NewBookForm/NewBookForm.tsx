import { useRef } from 'react';
import Card from '../../ui/Card';

import './NewBookFormStyle.css';

function NewBookForm(props: any) {
  const titleInputRef = useRef<HTMLInputElement>();
  const imageInputRef = useRef<HTMLInputElement>();
  const descriptionInputRef = useRef<HTMLTextAreaElement>();

  function submitHandler(event: any) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const bookData = {
        title: enteredTitle,
        image : enteredImage,
        description: enteredDescription
    }
    props.onAddBook(bookData)
  }

  return (
    <Card>
      <form className="form" onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor='title'>Book Title</label>
          <input required type='text' id='title' ref={titleInputRef} />
        </div>
        <div className="control">
          <label htmlFor='image'>Book Image</label>
          <input required type='url' id='image' ref={imageInputRef} />
        </div>
        <div className="control">
          <label htmlFor='description'>Description</label>
          <textarea
            required
            id='description'
            rows={5}
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className="actions">
          <button>Add Book</button>
        </div>
      </form>
    </Card>
  );
}

export default NewBookForm;
