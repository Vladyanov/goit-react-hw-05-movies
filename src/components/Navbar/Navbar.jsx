import { NavLink } from 'react-router-dom';
import css from './navbar.module.scss';
import items from './items';

const Navbar = () => {
  const elements = items.map(({ id, title, link }) => (
    <li key={id}>
      <NavLink className={css.link} to={link}>
        {title}
      </NavLink>
    </li>
  ));
  return <ul className={css.menu}>{elements}</ul>;
};

export default Navbar;
