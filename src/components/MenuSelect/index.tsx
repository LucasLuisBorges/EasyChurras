import React from "react";

import {
    Container,
    Title,
    WrapperView,
    WrapperContext
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
            <WrapperContext>

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

            <SendButton
                size={iconActive ? 36 : 26}
            />
            </WrapperContext>
        </Container>
    )
}