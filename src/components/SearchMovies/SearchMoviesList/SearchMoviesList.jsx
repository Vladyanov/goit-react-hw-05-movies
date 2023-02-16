import css from './search-movies-list.module.scss';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { Link } from 'react-router-dom';

const SearchMoviesList = ({ items }) => {
  const elements = items.map(({ id, title }) => (
    <Link className={css.item} key={id} to={`/movies/${id}`}>
      <li className={css.gallery_item}>{title}</li>
    </Link>
  ));
  return <ul className={css.gallery}>{elements}</ul>;
};

export default memo(SearchMoviesList);

SearchMoviesList.defaultProps = {
  items: [],
};

SearchMoviesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
