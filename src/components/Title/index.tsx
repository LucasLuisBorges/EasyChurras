import React from 'react';

import {
  TitleWrapper,
  ProfessionalsTitle,
  SubTitle
} from './styles';

interface Props {
  title: string;
  subTitle: string;
}

export function Title({title, subTitle} : Props){
  return (
    <TitleWrapper>
      <ProfessionalsTitle>{title}</ProfessionalsTitle>
      <SubTitle>{` ${subTitle}`}</SubTitle>
    </TitleWrapper>
  );
}