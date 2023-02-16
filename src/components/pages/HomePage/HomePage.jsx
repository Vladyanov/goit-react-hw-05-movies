import TrendingMovies from 'components/TrendingMovies/TrendingMovies';

import css from './home-page.module.scss';

const HomePage = () => {
  return (
    <>
      <h1 className={css.title}> Tranding today</h1>
      <TrendingMovies />
    </>
  );
};

export default HomePage;
