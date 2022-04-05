import React from 'react';

import {
  Container,
  Title
} from './styles';

interface IProps {
  title: string;
}

export function Button({ title }: IProps){
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}