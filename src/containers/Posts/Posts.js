import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetPostsQuery, useGetUsersQuery } from '../../service';
import { Page, Heading, Post } from '../../components';
import * as Styled from './styles';

export const Posts = () => {
    const { id } = useParams();
    const {data: users} = useGetUsersQuery();

    const currentUser = users && users.find((user) => user.id === +id);

    const { data, isLoading } = useGetPostsQuery(id);

    return (
        <Page>
            <Link style={{ textDecoration: 'none' }} to='/users'>{'< Users'}</Link>
            {currentUser && <Heading>{`${currentUser.username}'s posts`}</Heading>}
            <Styled.ListWrapper>
                {isLoading || data.map((post) => <Post {...post}/>)}
            </Styled.ListWrapper>
        </Page>
    );
};