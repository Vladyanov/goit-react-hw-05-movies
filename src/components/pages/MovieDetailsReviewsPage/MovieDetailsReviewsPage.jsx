import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getReviews } from 'components/Modules/moviesAPI';

import css from './movie-details-reviews-page.module.scss';

const MovieDetailsReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews(id);
        setReviews(data.results);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };

    fetchReviews();
  }, [id]);

  const elements = reviews.map(({ id, author, content }) => (
    <li className={css.item} key={id}>
      <p className={css.title}>Author</p>
      <p className={css.text}>{author}</p>
      <p className={css.text}>{content}</p>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default MovieDetailsReviewsPage;
