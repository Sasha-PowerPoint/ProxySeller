import React from 'react';
import * as Styled from './styles';

export const Card = ({ title, subtitle, children}) => {
    return (
        <Styled.Wrapper>
            <Styled.Title>{title}</Styled.Title>
            <Styled.SubTitle>{subtitle}</Styled.SubTitle>
            <Styled.ButtonsWrapper>
                {children}
            </Styled.ButtonsWrapper>
        </Styled.Wrapper>
    );
};