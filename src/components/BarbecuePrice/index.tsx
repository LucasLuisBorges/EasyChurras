import React, { useState } from "react";
import { useTheme } from "styled-components";
import theme from "../../styles/theme";

import * as S from "./styles";

interface IProps {
  name?: string;
  price: string;
}

export function BarbecuePrice({ name, price }: IProps) {
  const [checked, setChecked] = useState(false);
  const theme = useTheme();
  return (
    <S.Container>
      <S.CheckWrapper>
        <S.Check
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
          color={theme.colors.success_light}
        />
        <S.Title>{name}</S.Title>
      </S.CheckWrapper>
      <S.Price>+ R$ {price}</S.Price>
    </S.Container>
  );
}
