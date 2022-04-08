import { Entypo } from "@expo/vector-icons";
import React from "react";
import { useTheme } from "styled-components";
import { BackButton } from "../BackButton";

import {
    Container,
    Title,
    IconWrapper
} from './styles';

interface IProps {
    title: string;
}

export function TitleButtonSelected({ title }: IProps) {
    const theme = useTheme()
    return(
        <Container>
            <BackButton color={theme.colors.text_light} size={46} />

            <Title>{title}</Title>

            <IconWrapper>
                <Entypo name="heart" size={32} color={theme.colors.text_light}/>
            </IconWrapper>
        </Container>
    )
}