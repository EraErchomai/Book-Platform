import './App.css';

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/header';
import MainPage from './components/MainPage/mainPage';
import ReadPage from './components/ReadPage/readPage';
import FavoritesPage from './components/FavoritesPage/favoritesPage';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Routes>
      <Route path="/read" element={<ReadPage/>} />
      <Route path="/favorites" element={<FavoritesPage/>} />
      </Routes>
    </div>
  );
}

export default App;
