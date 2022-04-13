import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../../store/favorites-context';
import './MainNavigationStyle.css';

const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext)

  return (
    <header className="header">
      <div className="logo">Internet Book Database</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Books</Link>
          </li>
          <li>
            <Link to='/f1'>F1</Link>
          </li>
          <li>
            <Link to='/books-api'>Books API</Link>
          </li>
          <li>
            <Link to='/new-book'>Add New Book</Link>
          </li>
          <li>
            <Link to='/favorites'>My Favorites<span className="badge">{favoritesCtx.totalFavorites}</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
