import styled from "styled-components";

export const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const FilterBtn = styled.button`
    padding: 8px 10px;
    background: ${props => props.selected ? '#5CD3A8' : '#EBD8FF'};
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;
    border: none;
    font-size: 12px;
    font-weight: 500;
   
`;