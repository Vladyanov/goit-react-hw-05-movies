import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '75312bed02c00aa4fc762f08e8bb0223',
  },
});

export const trendingMovies = async () => {
  const { data } = await instance.get('/trending/movie/week');
  console.log(data.results);
  return data;
};
