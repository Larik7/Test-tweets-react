import {Nav, NavLink} from './Navigation.styled'

export const Navigation = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/tweets">Tweets</NavLink>
    </Nav>
  );
};
