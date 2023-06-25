import styled from 'styled-components';

export const Page = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 40px 0;

    @media screen and (max-width: 1300px) {
        width: 800px;
    }

    @media screen and (max-width: 850px) {
        width: calc(100% - 40px);
    }
`;