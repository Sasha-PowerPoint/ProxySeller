import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetUsersQuery } from '../../service';
import { Card, Page, Heading, Button, AlbumsModal } from '../../components';
import * as Styled from './styles';


export const Users = () => {
    const navigate = useNavigate();
    
    const { data, isLoading } = useGetUsersQuery();

    const handlePostsClicked = useCallback((id) => () => {navigate(`/users/${id}/posts`)}, [navigate]);
    const handleAlbumsClicked = useCallback((id) => () => {navigate(`/users/${id}/albums`)}, [navigate]);

    return (
        <Page>
            <Heading>Users</Heading>
            <Styled.ListWrapper>
                {isLoading || data.map((user) => (
                    <Card key={user.id} title={user.username} subtitle={user.name}>
                        <Button onClick={handlePostsClicked(user.id)}>Posts</Button>
                        <Button onClick={handleAlbumsClicked(user.id)}>Albums</Button>
                    </Card>
                ))}
            </Styled.ListWrapper>
            <AlbumsModal />
        </Page>
    );
}