import React from 'react';
import { StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { TitleButton } from '../../components/TitleButton';

import {
  Container,
  WrapperMenu,
  LogInfo,
  Title,
  SubTitle,
  ButtonWrapper
} from './styles';

export function Scheduled(){
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F2F2F2"
        translucent
      />
      <WrapperMenu>
        <BackButton size={41} />

        <TitleButton 
          title='Programados' 
          subTitle='Anteriores'
        />
      </WrapperMenu>

      <LogInfo>
        <Title>{`Você não tem nenhum\nchurrasco programado!`}</Title>
        <SubTitle>{`Te convidamos a solicitar um\nnovo churrasco!`}</SubTitle>
      </LogInfo>

      <ButtonWrapper>
        <Button title='Novo Churrasco'/>
      </ButtonWrapper>
    </Container>
  );
}