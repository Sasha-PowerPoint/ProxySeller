import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 20px;
    border-radius: 10px;
    background: white;
    flex-shrink: 0;
    border: 1px solid #e2e8f0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;

    transition: box-shadow 0.3s, transform 0.3s;

    &:hover {
        box-shadow: 10px 17px 5px 0px rgba(220,220,220,1);
        transform: translate(-10px, -14px);
    }
`;

export const Title = styled.h4`
    font-size: 20px;
    font-weight: 900;
`;

export const SubTitle = styled.span`
    color: #bbbbbb;
    font-size: 14px;
    font-weight: 900;
`;

export const ButtonsWrapper = styled.div`
    width: 100%;
    margin-top: 20px;
    padding-top: 20px;
    display: flex;
    gap: 20px;
`;