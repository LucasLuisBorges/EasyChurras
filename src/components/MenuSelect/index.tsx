import React from "react";

import {
    Container,
    Wrapper,
    Title
} from './styles';

import { AntDesign } from "@expo/vector-icons";
import { SendButton } from '../SendButton'


interface Props {
    title: string;
}

export function MenuSelect({ title }: Props) {
    return(
        <Container>
            <Wrapper>
                <AntDesign
                    name="user"
                    size={24}
                />
                <Title>{title}</Title>
            </Wrapper>

            <SendButton />
        </Container>
    )
}