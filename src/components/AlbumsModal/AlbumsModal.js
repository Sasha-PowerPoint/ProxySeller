import React, { useCallback } from 'react';
import Rodal from 'rodal';
import { useParams, useMatches, useNavigate  } from 'react-router-dom';
import { useGetAlbumsQuery, useGetUsersQuery } from '../../service';
import * as Styled from './styles';

export const AlbumsModal = () => {
    const navigate = useNavigate();
    const matches = useMatches();
    const {data: users} = useGetUsersQuery();
    const { id } = useParams();
    const { data, isLoading } = useGetAlbumsQuery(id);

    const handleClose = useCallback(() => {navigate('/users')},[navigate]);

    const currentUser = users && users.find((user) => console.log(user.id, +id) || user.id === +id);

    const isVisible = matches[0].pathname.includes('albums');

    return (
        <Rodal width={800} height={500} visible={isVisible} onClose={handleClose}>
            {currentUser && <Styled.Title>{`${currentUser.username}'s albums`}</Styled.Title>}
            <Styled.AlbumsWrapper>
                {!isLoading && data.map((album) => (
                    <Styled.AlbumItem>
                        {album.title}
                    </Styled.AlbumItem>
                ))}
            </Styled.AlbumsWrapper>
        </Rodal>
    );
};