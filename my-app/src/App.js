import { Route, Routes } from 'react-router-dom';

import AllBooksPage from './pages/AllBooks';
import FavoritesPage from './pages/Favorites';
import NewBooksPage from './pages/NewBooks';

import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={<AllBooksPage />}></Route>
        <Route exact path='/new-book' element={<NewBooksPage />}></Route>
        <Route exact path='/favorites' element={<FavoritesPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
