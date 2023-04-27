import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;

export const LinkPage = styled(NavLink)`
    font-size: 16px;
    text-decoration: none;
<<<<<<< HEAD
    
=======
    color: #00212f;
    font-weight: 600;
>>>>>>> f251a64aa429e2cc3061fbfa0fbcb9145577fab6
    &.active {
        color: #f83369;
    }
`;