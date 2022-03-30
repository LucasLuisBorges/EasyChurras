import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import ChurrasSvg from '../../assets/churrasqueiro.svg'
import StarSvg from '../../assets/star.svg'

import {
  Container,
  WrapperImage,
  WrapperDetail,
  Distance,
  Name,
  Type,
  WrapperStar
} from './styles';

interface Props extends TouchableOpacityProps {
  name: string;
  distace: string;
  type: string
}

export function ProfessionalsCard({ name, distace, type, ...rest } : Props){
  return (
    <Container {...rest}>
      <WrapperImage>
        <ChurrasSvg height={75} width={75} />
      </WrapperImage>
      <WrapperDetail>
        <Distance>{distace}</Distance>
        <Name>{name}</Name>
        <Type>{type}</Type>
        <WrapperStar>
          <StarSvg height={15} width={15} />
          <StarSvg height={15} width={15} />
          <StarSvg height={15} width={15} />
          <StarSvg height={15} width={15} />
          <StarSvg height={15} width={15} />
        </WrapperStar>
      </WrapperDetail>
    </Container>
  );
}