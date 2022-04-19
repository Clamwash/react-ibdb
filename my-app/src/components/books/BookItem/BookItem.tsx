import { useContext, useState } from 'react';
import { Book } from '../../../models/Book';
import { FavoritesContext } from '../../../store/favorites-context';
import Card from '../../ui/Card';
import './BookItemStyle.css';

const BookItem: React.FC<Book> = (props) => {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      console.log('book added');
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        authors: props.authors,
        description: props.description,
        image: props.image,
      });
    }
  }

  return (
    <li className='item' data-testid='book-element'>
      <Card>
        <div className='image'>
          <img src={props.image} alt={props.title} />
        </div>
        <div className='content'>
          <h3>{props.title}</h3>
          <p>By {props.authors}</p>
          <p className='description'>{props.description} </p>
        </div>
        <div className='actions'>
          <button
            id='button'
            className='favoriteButton'
            onClick={toggleFavoriteStatusHandler}
          >
            {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default BookItem;
