import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

interface IProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: IProps){
  return (
    <S.Container {...rest}>
      <S.Title>
        {title}
      </S.Title>
    </S.Container>
  );
}