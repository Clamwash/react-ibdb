import { useContext } from 'react';
import { FavoritesContext } from '../../store/favorites-context';
import Card from '../ui/Card';
import './BookItemStyle.css';

function BookItem(props: any) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
        console.log('remove gets executed')
      favoritesCtx.removeFavorite(props.id);
    } else {
        console.log('book added')
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
      });
    }
  }

  return (
    <li className="item">
      <Card>
        <div className="image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="content">
          <p>{props.title}</p>
          <p>{props.description} </p>
        </div>
        <div className="actions">
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default BookItem;
