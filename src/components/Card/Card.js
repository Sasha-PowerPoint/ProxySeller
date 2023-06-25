import React from 'react';
import * as Styled from './styles';
import { Button } from '../Button';

export const Card = ({ user }) => {
    return (
        <Styled.Wrapper>
            <Styled.Title>{user.name}</Styled.Title>
            <Styled.SubTitle>{user.username}</Styled.SubTitle>
            <Styled.ButtonsWrapper>
                <Button>Posts</Button>
                <Button>Albums</Button>
            </Styled.ButtonsWrapper>
        </Styled.Wrapper>
    );
};