import { useState, useEffect, useCallback } from 'react';
import {
  Link,
  useParams,
  useNavigate,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { getMovieDetails } from 'components/Modules/moviesAPI';

import css from './movie-details.module.scss';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from || '/';

  const goBack = useCallback(() => navigate(from), [from, navigate]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const result = await getMovieDetails(id);
        setMovieDetails(result);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchMovies();
  }, [id, setMovieDetails]);

  if (!movieDetails) {
    return;
  }

  const userScore = Math.round(movieDetails.vote_average * 10);
  const releaseDate = movieDetails.release_date.split('-');
  const genres = [];

  movieDetails.genres.map(genre => genres.push(genre.name));

  return (
    <>
      <button onClick={goBack} className={css.button} type="button">
        Go back
      </button>
      <div className={css.movie_details}>
        <div className={css.wrapper}>
          <img
            src={`https://www.themoviedb.org/t/p/w300/${movieDetails.poster_path}`}
            alt=""
          />
        </div>
        <div className={css.text_wrapper}>
          <p className={css.title}>
            {movieDetails.original_title} ({releaseDate[0]})
          </p>
          <p>User score: {userScore}%</p>
          <p className={css.title}>Overview</p>
          <p>{movieDetails.overview}</p>
          <p className={css.title}>Genres</p>
          <p>{genres.join(', ')}</p>
        </div>
      </div>
      <div className={css.additoinal_info}>
        <p className={css.title}>Additional information</p>
        <Link className={css.link} to="cast" state={{ from }}>
          Cast
        </Link>
        <Link className={css.link} to="reviews" state={{ from }}>
          Reviews
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
