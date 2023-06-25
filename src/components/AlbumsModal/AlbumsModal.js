import React, { useCallback } from 'react';
import Rodal from 'rodal';
import { useParams, useMatches, useNavigate  } from 'react-router-dom';
import { useGetAlbumsQuery, useGetUsersQuery } from '../../service';
import { Loader } from '../Loader';
import * as Styled from './styles';

export const AlbumsModal = () => {
    const navigate = useNavigate();
    const matches = useMatches();
    const {data: users} = useGetUsersQuery();
    const { id } = useParams();
    const { data, isFetching } = useGetAlbumsQuery(id);

    const handleClose = useCallback(() => {navigate('/users')},[navigate]);

    const currentUser = users && users.find((user) => user.id === +id);

    const isVisible = matches[0].pathname.includes('albums');

    console.log(id, isFetching);

    return (
        <Rodal className="albums-modal" width={800} height={500} visible={isVisible} onClose={handleClose}>
            <Styled.ModalContentWrapper>
                {isFetching ? <Loader style={{ height: '100%' }} /> : (
                    <React.Fragment>
                        {currentUser && <Styled.Title>{`${currentUser.username}'s albums`}</Styled.Title>}
                        <Styled.AlbumsWrapper>
                            {data.map((album) => (
                                <Styled.AlbumItem key={album.id}>
                                    {album.title}
                                </Styled.AlbumItem>
                            ))}
                        </Styled.AlbumsWrapper>
                    </React.Fragment>
                )}
            </Styled.ModalContentWrapper>
        </Rodal>
    );
};