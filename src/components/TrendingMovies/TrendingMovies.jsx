import { useEffect, useState } from 'react';

import MoviesList from 'components/MoviesList/MoviesList';

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
      <MoviesList items={items} />
      {error && <p>Error: {error}</p>}
    </>
  );
};

export default TrendingMovies;
