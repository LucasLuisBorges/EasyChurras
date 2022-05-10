import React from 'react';
import { BackButton } from '../BackButton';

import * as S from './styles';

interface IProps {
  text: string;
}

export function BackInput({ text }: IProps){
  return (
    <S.Container>
      <BackButton size={41}/>

      <S.InputArea placeholder={text}/>
    </S.Container>
  );
}