import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  TitleWrapper,
  Title,
  Border
} from './styles';

interface IProps extends TouchableOpacityProps {
  title: string;
}

export function Recents({ title, ...rest }: IProps){
  return (
    <Container>
      <TitleWrapper {...rest}>
        <Title>{title}</Title>
      </TitleWrapper>
      <Border />
    </Container>
  );
}