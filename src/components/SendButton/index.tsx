import React from "react";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";

import { MaterialIcons } from "@expo/vector-icons";

import * as S from "./styles";

interface Props {
  color?: string;
  size: number;
}

export function SendButton({ color, size }: Props) {
  const theme = useTheme();

  return (
    <S.Container>
      <MaterialIcons
        name="chevron-right"
        size={size}
        color={color ? color : theme.colors.arrow}
      />
    </S.Container>
  );
}
