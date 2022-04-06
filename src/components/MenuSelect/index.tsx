import React from "react";

import {
    Container,
    Title,
    WrapperView,
    WrapperContext
} from './styles';

import { Feather } from "@expo/vector-icons";
import { SendButton } from '../SendButton'
import { TouchableOpacityProps } from "react-native";


interface Props extends TouchableOpacityProps{
    title: string;
    iconName?: React.ComponentProps<typeof Feather>['name']
    iconActive: boolean;
}

export function MenuSelect({ title, iconName, iconActive, ...rest }: Props) {
    return(
        <Container {...rest}>
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