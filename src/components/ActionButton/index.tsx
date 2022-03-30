import React from 'react';

import {
  Container,
  Title
} from './styles';

interface Props {
  color: string;
  title: string;
}

export function ActionButton({ color, title }: Props){
  return (
    <Container
      color={color}
    >
      <Title>{title}</Title>
    </Container>
  );
}