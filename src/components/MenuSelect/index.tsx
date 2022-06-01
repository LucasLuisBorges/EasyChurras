import React from "react";

import * as S from "./styles";

import { Feather } from "@expo/vector-icons";
import { SendButton } from "../SendButton";
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
  title: string;
  iconName?: React.ComponentProps<typeof Feather>["name"];
  iconActive: boolean;
}

export function MenuSelect({ title, iconName, iconActive, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.WrapperContext>
        {iconActive ? (
          <S.WrapperView>
            <Feather name={iconName} size={24} />
            <S.Title>{title}</S.Title>
          </S.WrapperView>
        ) : (
          <S.Title>{title}</S.Title>
        )}

        <SendButton size={iconActive ? 36 : 26} />
      </S.WrapperContext>
    </S.Container>
  );
}
