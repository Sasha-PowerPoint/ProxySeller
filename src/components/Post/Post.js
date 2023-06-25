import React from 'react';
import * as Styled from './styles';

export const Post = ({ title, body, ...props}) => {
    return (
        <Styled.Wrapper {...props}>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Body>{body}</Styled.Body>
        </Styled.Wrapper>
    );
};