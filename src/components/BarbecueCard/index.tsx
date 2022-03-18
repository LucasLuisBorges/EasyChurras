import React from 'react';

import BarbecueSvg from '../../assets/barbecue.svg'

import {
  Container,
  TextWrapper,
  Title
} from './styles';

interface Props {
  title: string
}

export function BarbecueCard({title} : Props){
  return (
    <Container>
      <BarbecueSvg height={150} width={150} />
      <TextWrapper>
        <Title>{title}</Title>
      </TextWrapper>
    </Container>
  );
}