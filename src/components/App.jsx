import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import SingleMoviePage from './pages/SingleMoviePage/SingleMoviePage';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />}>
          <Route path=":id" element={<SingleMoviePage />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
