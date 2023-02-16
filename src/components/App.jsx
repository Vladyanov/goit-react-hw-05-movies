import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import MoviesSearchPage from './pages/MoviesSearchPage/MoviesSearchPage';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import MovieDetailsCastPage from './pages/MovieDetailsCastPage/MovieDetailsCastPage';
import MovieDetailsReviewsPage from './pages/MovieDetailsReviewsPage/MovieDetailsReviewsPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesSearchPage />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<MovieDetailsCastPage />} />
          <Route path="reviews" element={<MovieDetailsReviewsPage />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
