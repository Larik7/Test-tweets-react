import styled from "styled-components";
import { NavLink, Link  } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  > nav {
    display: flex;
    gap: 20px
  }
`;

export const HeaderLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: white;
    background-color: tomato;
  }
`;




export const GoBackLink = styled(Link)`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 80px;
  padding: 8px 18px;
  background-color: #EBD8FF;;
  text-decoration: none;
  color: black;
  font-size: 12px;
  font-weight: 500;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  :hover {
    background-color: #5CD3A8;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }    
`;

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const TweetsContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Title = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  text-transform: uppercase;
  color: black;
  text-align: center;
`;

export const HomeWrap = styled.div`
    width: 700px;
    margin: 30px auto;
    @media screen and (max-width: 761px) {
      width: 380px;
    }
`




// export const Container = styled.div`
//   max-width: 960px;
//   margin: 0 auto;
//   padding: 0 16px;
// `;