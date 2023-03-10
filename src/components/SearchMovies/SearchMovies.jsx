import { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import MoviesList from 'components/MoviesList/MoviesList';
import Searchbar from 'components/Searchbar/Searchbar';

import { searchMovies } from '../Modules/moviesAPI';

const SearchMovies = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');

  useEffect(() => {
    if (search) {
      const fetchMovies = async () => {
        try {
          const data = await searchMovies(search);
          setItems(data.results);
        } catch ({ response }) {
          setError(response.data.message);
        }
      };
      fetchMovies();
    }
  }, [search]);

  const searchMoviesByTitle = useCallback(
    ({ search }) => {
      setSearchParams({ search });
      setItems([]);
    },
    [setSearchParams]
  );

  return (
    <>
      <Searchbar onSubmit={searchMoviesByTitle} />
      <MoviesList items={items} />
      {error && <p>Error: {error}</p>}
    </>
  );
};

export default SearchMovies;
