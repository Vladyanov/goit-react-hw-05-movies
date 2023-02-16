import css from './movies-list.module.scss';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ items }) => {
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

export default memo(MoviesList);

MoviesList.defaultProps = {
  items: [],
};

MoviesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
