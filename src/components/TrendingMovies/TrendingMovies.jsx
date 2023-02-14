import { useEffect, useState } from 'react';

import TrendingMoviesList from './TrendingMoviesList/TrendingMoviesList';

import { trendingMovies } from '../Modules/moviesAPI';

const TrendingMovies = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await trendingMovies();
        console.log(data.results);
        setItems(data.results);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchImages();
  }, [setItems]);

  return (
    <>
      <TrendingMoviesList items={items} />
      {error && <p>Error: {error}</p>}
    </>
  );
};

export default TrendingMovies;
