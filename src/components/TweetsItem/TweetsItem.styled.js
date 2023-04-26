import styled from "styled-components";

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    justify-content: center;
    align-items: center;
`;

export const Avatar = styled.img`
    z-index: 101;
    position: relative;
    width: 62px;
    height: 62px;
    background: #EBD8FF;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
    border-radius: 50%;
    border: 8px solid #EBD8FF;
    object-fit: contain;
`;

export const Stats = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
    &:after {
        content: '';
        width: 380px;
        z-index: 100;
        position: absolute;
        width: 380px;
        height: 8px;
        left: 0px;
        top: 214px;
        background: #EBD8FF;
        box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
    }
`;

export const Counts = styled.p`
    margin: 0;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: #EBD8FF;
`;

export const FollowBtn = styled.button`
    padding: 14px 28px;
    background: ${props => props.isFollow ? '#5CD3A8' : '#EBD8FF'};
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;
    border: none;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    color: #373737;
    :hover {
        background: tomato;
    }
`;

export const LoadMoreBtn = styled.button`
    display: block;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    padding: 12px 25px;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;
    border: none;
    background-color: #5CD3A8;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    color: #373737;
    :hover {
        background: #EBD8FF;
    }
`