import { LinkPage, Nav } from './Navigation.styled';

export const Navigation = () => {

    return (
        <Nav>
            <LinkPage to='/'>Home</LinkPage>
            <LinkPage to='/tweets'>Tweets</LinkPage>
        </Nav>
    )
};