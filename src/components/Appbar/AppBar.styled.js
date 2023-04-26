import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Header = styled.header`
    display: flex;
    gap: 60px;
    padding: 20px;
    align-items: center;
    background-color: #EBD8FF;
`;

export const Logo = styled(NavLink)`
    text-decoration: none;
    color: #00212f;
`;