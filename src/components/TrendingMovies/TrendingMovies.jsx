import { useEffect, useState } from 'react';

import TrendingMoviesList from './TrendingMoviesList/TrendingMoviesList';

import { trendingMovies } from '../Modules/moviesAPI';

const TrendingMovies = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await trendingMovies();
        setItems(data.results);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <TrendingMoviesList items={items} />
      {error && <p>Error: {error}</p>}
    </>
  );
};

export default TrendingMovies;
