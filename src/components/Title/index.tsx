import React from 'react';

import * as S from './styles';

interface Props {
  title: string;
  subTitle: string;
}

export function Title({title, subTitle} : Props){
  return (
    <S.TitleWrapper>
      <S.ProfessionalsTitle>{title}</S.ProfessionalsTitle>
      <S.SubTitle>{` ${subTitle}`}</S.SubTitle>
    </S.TitleWrapper>
  );
}