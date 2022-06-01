import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import ChurrasSvg from '../../assets/churrasqueiro.svg'
import StarSvg from '../../assets/star.svg'

import * as S from './styles';

interface Props extends TouchableOpacityProps {
  name: string;
  distance: string;
  type: string
}

export function ProfessionalsCard({ name, distance, type, ...rest } : Props){
  return (
    <S.Container {...rest}>
      <S.WrapperImage>
        <ChurrasSvg
          height={75}
          width={75}
        />
      </S.WrapperImage>
      <S.WrapperDetail>
        <S.Distance>
          {distance}
        </S.Distance>
        <S.Name>
          {name}
        </S.Name>
        <S.Type>
          {type}
        </S.Type>
        <S.WrapperStar>
          <StarSvg height={15} width={15} />
          <StarSvg height={15} width={15} />
          <StarSvg height={15} width={15} />
          <StarSvg height={15} width={15} />
          <StarSvg height={15} width={15} />
        </S.WrapperStar>
      </S.WrapperDetail>
    </S.Container>
  );
}