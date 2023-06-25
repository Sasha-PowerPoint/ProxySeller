import React from 'react';
import { useGetUsersQuery } from '../../service';
import { Card } from '../../components';
import * as Styled from './styles';


export const UsersList = () => {

    const { data, isLoading } = useGetUsersQuery();

    console.log(data);

    return (
        <Styled.Wrapper>
            {isLoading || data.map((user) => (
                <Card key={user.name} user={user}/>
            ))}
        </Styled.Wrapper>
    );
}