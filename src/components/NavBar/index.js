import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div style={{width: '100%', backgroundColor: 'black'}}>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/props-page"
          >
            Props Example
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/state-page"
          >
            State Example
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
