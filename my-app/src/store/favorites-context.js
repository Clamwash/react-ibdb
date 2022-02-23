import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteBook) => {},
  removeFavorite: (bookId) => {},
  itemIsFavorite: (bookId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteBook) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteBook);
    });
  }

  function removeFavoriteHandler(bookId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((book) => book.id !== bookId);
    });
  }

  function itemIsFavoriteHandler(bookId) {
    return userFavorites.some((book) => book.id === bookId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
