import React, { useState } from "react";
import { StatusBar } from "react-native";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";

import * as S from "./styles";
import theme from "../../styles/theme";
import { PreviousCard } from "./PreviousCard";
import { useNavigation } from "@react-navigation/native";

export function Scheduled() {
  const [programmed, setProgrammed] = useState(true);
  const [previous, setPrevious] = useState(false);
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function TitleClickStyle() {
    if (programmed === false) {
      setProgrammed(true);
      setPrevious(false);
    }
  }

  function SubTitleClickStyle() {
    if (previous === false) {
      setPrevious(true);
      setProgrammed(false);
    }
  }

  return (
    <S.Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <S.WrapperMenu>
        <BackButton size={41} onPress={handleBack}/>

        <S.Wrapper>
          <S.TitleWrapper onPress={TitleClickStyle}>
            <S.ProfessionalsTitle
              textColor={
                programmed ? theme.colors.text : theme.colors.textOpacity
              }
            >
              Programados
            </S.ProfessionalsTitle>
          </S.TitleWrapper>

          <S.SubtitleWrapper onPress={SubTitleClickStyle}>
            <S.SubTitleHeader
              textColor={
                programmed ? theme.colors.textOpacity : theme.colors.text
              }
            >
              {`    ${"Anteriores"}`}
            </S.SubTitleHeader>
          </S.SubtitleWrapper>
        </S.Wrapper>
      </S.WrapperMenu>

      {programmed ? (
        <S.LogInfo>
          <S.Title>{`Você não tem nenhum\nchurrasco programado!`}</S.Title>
          <S.SubTitle>
            {`Te convidamos a solicitar um\nnovo churrasco!`}
          </S.SubTitle>
        </S.LogInfo>
      ) : (
        <S.WrapperCard>
          <PreviousCard title="Churrasco da familia" date="25/05/2022" />
        </S.WrapperCard>
      )}

      <S.ButtonWrapper>
        <Button title="Novo Churrasco" />
      </S.ButtonWrapper>
    </S.Container>
  );
}
