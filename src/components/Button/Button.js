import React from 'react';
import * as Styled from './styles';

export const Button = ({children, ...props}) => <Styled.Button {...props}>{children}</Styled.Button>