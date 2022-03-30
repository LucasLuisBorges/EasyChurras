import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import BarbecueSvg from '../../assets/barbecue.svg'

import {
  Container,
  TextWrapper,
  Title
} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function BarbecueCard({title, ...rest} : Props){
  return (
    <Container {...rest}>
      <BarbecueSvg height={150} width={150} />
      <TextWrapper>
        <Title>{title}</Title>
      </TextWrapper>
    </Container>
  );
}