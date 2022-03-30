import React from "react";

import {
    Container,
    Wrapper,
    Title,
    WrapperView
} from './styles';

import { Feather } from "@expo/vector-icons";
import { SendButton } from '../SendButton'


interface Props {
    title: string;
    iconName?: React.ComponentProps<typeof Feather>['name']
    iconActive: boolean;
}

export function MenuSelect({ title, iconName, iconActive }: Props) {
    return(
        <Container>
            <Wrapper>
                { iconActive ?
                    <WrapperView>
                        <Feather
                            name={iconName}
                            size={24}
                        />
                        <Title>{title}</Title>
                    </WrapperView>
                    :
                    <Title>{title}</Title>
                }
                
            </Wrapper>

            <SendButton />
        </Container>
    )
}