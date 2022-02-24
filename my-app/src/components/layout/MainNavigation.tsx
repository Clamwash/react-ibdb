import { Link } from 'react-router-dom';
import './MainNavigationStyle.css';

function MainNavigation() {
  return (
    <header className="header">
      <div className="logo">Internet Book Database</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Books</Link>
          </li>
          <li>
            <Link to='/new-book'>Add New Book</Link>
          </li>
          <li>
            <Link to='/favorites'>My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
