import { NavPage, Nav } from './Navigation.styled';

export const Navigation = () => {

    return (
        <Nav>
            <NavPage to='/'>Home</NavPage>
            <NavPage to='/tweets'>Tweets</NavPage>
        </Nav>
    )
};