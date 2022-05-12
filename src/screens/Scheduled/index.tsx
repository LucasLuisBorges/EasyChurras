import React, { useState } from "react";
import { StatusBar } from "react-native";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { StyleSheet } from 'react-native';

import * as S from "./styles";

export function Scheduled() {
  const [programmed, setProgrammed] = useState(true);
  const [previous, setPrevious] = useState(false)

  function TitleClickStyle() {
    if(programmed === false) {
      setProgrammed(true);
      setPrevious(false);
    }
  }

  function SubTitleClickStyle() {
    if(previous === false) {
      setPrevious(true);
      setProgrammed(false);
    }
  }
  
  return (
    <S.Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F2F2F2"
        translucent
      />
      <S.WrapperMenu>
        <BackButton size={41} />

        <S.Wrapper>
          <S.TitleWrapper onPress={TitleClickStyle}>
            <S.ProfessionalsTitle
              style={programmed ? styles.text2 : styles.text1}
            >
              Programados
            </S.ProfessionalsTitle>
          </S.TitleWrapper>

          <S.SubtitleWrapper onPress={SubTitleClickStyle}>
            <S.SubTitleHeader style={programmed ? styles.text1 : styles.text2}>
              {`    ${'Anteriores'}`}
            </S.SubTitleHeader>
          </S.SubtitleWrapper>
        </S.Wrapper>
      </S.WrapperMenu>

      {programmed ? (
        <S.LogInfo>
        <S.Title>
          {`Você não tem nenhum\nchurrasco programado!`}
        </S.Title>
        <S.SubTitle>
          {`Te convidamos a solicitar um\nnovo churrasco!`}
        </S.SubTitle>
      </S.LogInfo>
      ) : (
        <S.SubTitle>
          {`Nada para ver aqui!`}
        </S.SubTitle>
      )

      }

      <S.ButtonWrapper>
        <Button title="Novo Churrasco" />
      </S.ButtonWrapper>
    </S.Container>
  );
}

const styles = StyleSheet.create({
  text1: {
    color: '#a6a6a6',
  },
  text2: {
    color: '#232323',
  }
})