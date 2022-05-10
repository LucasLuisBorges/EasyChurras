import React from "react";

import { Entypo } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import * as S from './styles';
import { BackButton } from "../BackButton";


interface IProps {
    title: string;
}

export function TitleButtonSelected({ title }: IProps) {
    const theme = useTheme()

    return(
        <S.Container>
            <BackButton color={theme.colors.text_light} size={46} />

            <S.Title>{title}</S.Title>

            <S.IconWrapper>
                <Entypo name="heart" size={32} color={theme.colors.text_light}/>
            </S.IconWrapper>
        </S.Container>
    )
}