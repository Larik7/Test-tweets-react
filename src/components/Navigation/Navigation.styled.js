import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const LinkNav = styled(NavLink)`
    font-weight: 500;
    font-size: 16px;
    color: #32a852;
    text-decoration: none;
    &.active {
        color: #32a852;
    }
`;