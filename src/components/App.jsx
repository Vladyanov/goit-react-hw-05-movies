import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Loader from './Loader/Loader';
const Navbar = lazy(() => import('./Navbar/Navbar'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesSearchPage = lazy(() =>
  import('./pages/MoviesSearchPage/MoviesSearchPage')
);
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const MovieDetailsCastPage = lazy(() =>
  import('./pages/MovieDetailsCastPage/MovieDetailsCastPage')
);
const MovieDetailsReviewsPage = lazy(() =>
  import('./pages/MovieDetailsReviewsPage/MovieDetailsReviewsPage')
);

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesSearchPage />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<MovieDetailsCastPage />} />
            <Route path="reviews" element={<MovieDetailsReviewsPage />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
