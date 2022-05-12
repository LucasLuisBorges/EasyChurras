import React from 'react';

import * as S from './styles';

interface Props {
  color: string;
  title: string;
  colorText: string;
  colorBorder: string;
}

export function ActionButton({ color, title, colorText, colorBorder }: Props){
  return (
    <S.Container
      colorBorder={colorBorder}
      color={color}
    >
      <S.Title
        colorText={colorText}
      >
        {title}
      </S.Title>
    </S.Container>
  );
}