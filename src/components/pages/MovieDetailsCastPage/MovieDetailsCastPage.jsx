import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCast } from 'components/Modules/moviesAPI';
import css from './movie-details-cast-page.module.scss';

const MovieDetailsCastPage = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await getCast(id);
        setCast(data.cast);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };

    fetchCast();
  }, [id]);

  const BASE_URL = 'https://image.tmdb.org/t/p/w154/';
  const defaultProfile =
    'https://resizing.flixster.com/FTaJgW0YxsazWOgq67piXaMXgtg=/154x200/v2/https://flxt.tmsimg.com/assets/157012_v9_bc.jpg';

  const elements = cast.map(({ id, profile_path, name, character }) => (
    <li className={css.item} key={id}>
      <div className={css.wrapper}>
        <img
          src={profile_path ? BASE_URL + profile_path : defaultProfile}
          alt={name}
        />
      </div>
      <div className={css.text_wrapper}>
        <p className={css.title}>Name</p>
        <p className={css.text}>{name}</p>
        <p className={css.title}>Charachter</p>
        <p className={css.text}>{character}</p>
      </div>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default MovieDetailsCastPage;
