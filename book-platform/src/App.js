import './App.css';

import { Route, Routes } from 'react-router-dom';

import MainPage from './components/MainPage/mainPage';
import ReadPage from './components/ReadPage/readPage';
import FavoritesPage from './components/FavoritesPage/favoritesPage';
import GenresPage from './components/Genres/genres';
import OneBook from './components/OneBook/oneBook';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/read" element={<ReadPage/>} />
      <Route path="/favorites" element={<FavoritesPage/>} />
      <Route path="/genres" element={<GenresPage/>} />
      <Route path="/books/:id" element={<OneBook />} />
      </Routes>
    </div>
  );
}

export default App;
