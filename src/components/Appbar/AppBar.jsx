import { CgTwitter } from 'react-icons/cg';

import { Navigation } from '../Navigation/Navigation';
import { Header, Logo } from './AppBar.styled';


export const AppBar = () => {


    return (
        <Header>
            <Logo to="/">
                <CgTwitter size='40'></CgTwitter>
            </Logo>
            <Navigation/>
        </Header>

    );
};