import {Nav, LinkNav} from './Navigation.styled'

export const Navigation = () => {
  return (
    <Nav>
      <LinkNav to="/">Home</LinkNav>
      <LinkNav to="/tweets">Tweets</LinkNav>
    </Nav>
  );
};
