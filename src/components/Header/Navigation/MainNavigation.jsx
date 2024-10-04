import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

export default function MainNavigation() {
  return (
    <>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="meals"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Meals
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
