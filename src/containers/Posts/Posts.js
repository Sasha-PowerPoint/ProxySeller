import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetPostsQuery, useGetUsersQuery } from '../../service';
import { Page, Heading, Post, Loader } from '../../components';
import * as Styled from './styles';

export const Posts = () => {
    const { id } = useParams();
    const {data: users} = useGetUsersQuery();

    const currentUser = users && users.find((user) => user.id === +id);

    const { data, isFetching } = useGetPostsQuery(id);

    return (
        <Page>
            <Link style={{ textDecoration: 'none' }} to='/users'>{'< Users'}</Link>
            {isFetching ? <Loader /> : (
                <React.Fragment>
                    {currentUser && <Heading>{`${currentUser.username}'s posts`}</Heading>}
                    <Styled.ListWrapper>
                        {data.map((post) => <Post key={post.id} {...post}/>)}
                    </Styled.ListWrapper>
                </React.Fragment>
            )}
        </Page>
    );
};