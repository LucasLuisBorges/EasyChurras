import React from 'react';
import { BackButton } from '../BackButton';

import {
  Container,
  InputArea
} from './styles';

interface IProps {
  text: string;
}

export function BackInput({ text }: IProps){
  return (
    <Container>
      <BackButton size={41}/>

      <InputArea placeholder={text}/>
    </Container>
  );
}