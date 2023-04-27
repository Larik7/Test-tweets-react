import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;

export const NavPage = styled(NavLink)`
    font-size: 16px;
    text-decoration: none;
    color: #00212f;
    font-weight: 600;

    &.active {
        color: #f83369;
    }
`;