import { createContext, useState } from 'react';
import { Book } from '../interfaces/Models';

export const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteBook: Book) => {},
  removeFavorite: (bookId: string) => {},
  itemIsFavorite: (bookId: string): boolean => {return false},
});

export function FavoritesContextProvider(props: any) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteBook: Book) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteBook);
    });
  }

  function removeFavoriteHandler(bookId: string) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((book) => book.id !== bookId);
    });
  }

  function itemIsFavoriteHandler(bookId: string) {
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
