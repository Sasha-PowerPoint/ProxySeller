import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 10px 20px;
    border-radius: 10px;
    background: white;
    flex-shrink: 0;
    border: 1px solid #e2e8f0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Title = styled.h4`
    font-size: 26px;
    font-weight: 900;
    line-height: 1.4;
    margin-bottom: 20px;

    &:first-letter {
        text-transform: uppercase;
    }
`;

export const Body = styled.p`
    &:first-letter {
        text-transform: uppercase;
    }
`;