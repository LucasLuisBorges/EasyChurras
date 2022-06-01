import React, { useState } from "react";

import { Entypo } from "@expo/vector-icons";

import { BackButton } from "../../../../components/BackButton";
import theme from "../../../../styles/theme";

import * as S from "./styled";
import { TouchableOpacityProps } from "react-native";

interface IProps extends TouchableOpacityProps{
  title: string;
  heartColor: string;
  onPressBack: () => void;
}

export function HeaderComp({
  title,
  onPressBack,
  heartColor,
  ...rest
}: IProps) {
  const image = {
    uri: "https://www.lopessupermercados.com.br/portalrevista/wp-content/uploads/2019/11/shutterstock_413328976-600x380.jpg",
  };

  return (
    <S.HeaderWrapper source={image}>
      <S.TitleWrapper>
        <S.Container>
          <BackButton
            color={theme.colors.text_light}
            size={46}
            onPress={onPressBack}
          />

          <S.Title>{title}</S.Title>

          <S.IconWrapper {...rest}>
            <Entypo name="heart" size={32} color={heartColor} />
          </S.IconWrapper>
        </S.Container>
      </S.TitleWrapper>
    </S.HeaderWrapper>
  );
}
