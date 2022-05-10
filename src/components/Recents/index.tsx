import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

interface IProps extends TouchableOpacityProps {
  title: string;
}

export function Recents({ title, ...rest }: IProps){
  return (
    <S.Container>
      <S.TitleWrapper {...rest}>
        <S.Title>
          {title}
        </S.Title>
      </S.TitleWrapper>
      <S.Border />
    </S.Container>
  );
}