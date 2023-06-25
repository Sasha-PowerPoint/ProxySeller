import styled from 'styled-components';

export const Title = styled.h4`
    font-size: 26px;
    font-weight: 900;
    margin-bottom: 20px;
`;

export const AlbumItem = styled.p`
    padding: 5px 10px;
`;

export const AlbumsWrapper = styled.div`
    display: flex;
    flex-direction: column;

    ${AlbumItem}:not(:last-child) {
        border-bottom: 1px solid #acacac;
    }
`;