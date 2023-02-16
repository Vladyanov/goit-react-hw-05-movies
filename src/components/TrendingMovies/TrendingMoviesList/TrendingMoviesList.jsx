import css from './trending-movies-list.module.scss';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const TrendingMoviesList = ({ items }) => {
  const location = useLocation();

  const elements = items.map(({ id, title }) => (
    <Link
      className={css.item}
      key={id}
      to={`/movies/${id}`}
      state={{ from: location }}
    >
      <li className={css.gallery_item}>{title}</li>
    </Link>
  ));
  return <ul className={css.gallery}>{elements}</ul>;
};

export default memo(TrendingMoviesList);

TrendingMoviesList.defaultProps = {
  items: [],
};

TrendingMoviesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};