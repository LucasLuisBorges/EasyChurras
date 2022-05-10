import React from 'react';
import { StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { TitleButton } from '../../components/TitleButton';

import * as S from './styles';

export function Scheduled(){
  return (
    <S.Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F2F2F2"
        translucent
      />
      <S.WrapperMenu>
        <BackButton size={41} />

        <TitleButton 
          title='Programados' 
          subTitle='Anteriores'
        />
      </S.WrapperMenu>

      <S.LogInfo>
        <S.Title>
          {`Você não tem nenhum\nchurrasco programado!`}
        </S.Title>
        <S.SubTitle>
          {`Te convidamos a solicitar um\nnovo churrasco!`}
        </S.SubTitle>
      </S.LogInfo>

      <S.ButtonWrapper>
        <Button
          title='Novo Churrasco'
        />
      </S.ButtonWrapper>
    </S.Container>
  );
}