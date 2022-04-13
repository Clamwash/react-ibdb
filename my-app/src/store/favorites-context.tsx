import { createContext, useState } from 'react';
import { Book } from '../models/Book';

type FavoritesContextObject = {
  favorites: Book[];
  totalFavorites: number;
  addFavorite: (favoriteBook: Book) => void;
  removeFavorite: (bookId: string) => void;
  itemIsFavorite: (bookId: string) => boolean;
};

export const FavoritesContext = createContext<FavoritesContextObject>({
  favorites: [],
  totalFavorites: 0,
  addFavorite: () => {},
  removeFavorite: (bookId: string) => {},
  itemIsFavorite: (bookId: string) => {
    return false;
  },
});

export const FavoritesContextProvider: React.FC = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);


  const addFavoriteHandler = (favoriteBook: Book) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteBook);
    });
  }

  const removeFavoriteHandler = (bookId: string) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((book) => book.id !== bookId);
    });
  }

  const itemIsFavoriteHandler = (bookId: string) => {
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
