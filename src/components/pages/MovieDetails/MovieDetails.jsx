import { useState, useEffect, useCallback } from 'react';
import { Link, useParams, useNavigate, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'components/Modules/moviesAPI';

import css from './movie-details.module.scss';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = useCallback(() => navigate(-1), [navigate]);

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
        <p>
          {movieDetails.original_title} ({releaseDate[0]})
        </p>
        <p>User score: {userScore}%</p>
        <p>Overview</p>
        <p>{movieDetails.overview}</p>
        <p>Genres</p>
        <p>{genres.join(', ')}</p>
      </div>
      <div className={css.additoinal_info}>
        <p>Additional information</p>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
