import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    title: 'Home',
    link: '/',
  },

  {
    id: nanoid(),
    title: 'Movies',
    link: '/movies',
  },
];

export default items;
