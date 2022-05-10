import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import BarbecueSvg from '../../assets/barbecue.svg'

import * as S from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function BarbecueCard({title, ...rest} : Props){
  return (
    <S.Container {...rest}>
      <BarbecueSvg 
        height={150}
        width={150}
      />
      <S.TextWrapper>
        <S.Title>
          {title}
        </S.Title>
      </S.TextWrapper>
    </S.Container>
  );
}