import { useContext } from 'react';
import BookList from '../components/books/BookList/BookList';
import { FavoritesContext } from '../store/favorites-context';

const FavoritesPage = () => {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <BookList books={favoritesCtx.favorites} subjectName = "My Favorites" />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
