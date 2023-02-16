import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '75312bed02c00aa4fc762f08e8bb0223',
  },
});

export const trendingMovies = async () => {
  const { data } = await instance.get('/trending/movie/week');
  return data;
};

export const getMovieDetails = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const searchMovies = async query => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query,
    },
  });
  return data;
};

export const getCast = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data;
};

export const getReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data;
};
