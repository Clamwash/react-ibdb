import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';

import AllBooksPage from './pages/AllBooks';
import FavoritesPage from './pages/Favorites';
import NewBooksPage from './pages/NewBooks';

// import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllBooksPage />}></Route>
        <Route path='/new-book' element={<NewBooksPage />}></Route>
        <Route path='/favorites' element={<FavoritesPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
