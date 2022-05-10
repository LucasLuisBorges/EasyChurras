import React from 'react';

import * as S from './styles';

interface Props {
  color: string;
  title: string;
}

export function ActionButton({ color, title }: Props){
  return (
    <S.Container
      color={color}
    >
      <S.Title>
        {title}
      </S.Title>
    </S.Container>
  );
}