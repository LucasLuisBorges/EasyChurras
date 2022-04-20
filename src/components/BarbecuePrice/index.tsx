import React, { useState } from "react";
import { useTheme } from "styled-components";
import theme from "../../styles/theme";

import {
    Container,
    CheckWrapper,
    Check,
    Title,
    Price
} from './styles';

interface IProps {
    name?: string;
    price: string;
}

export function BarbecuePrice({ name, price }: IProps) {
    const [checked, setChecked] = useState(false);
    const theme = useTheme();
    return (
        <Container>
            <CheckWrapper>
                <Check 
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                      }}
                    color={theme.colors.success_light}
                />
                <Title>{name}</Title>
            </CheckWrapper>
            <Price>+ R$ {price}</Price>
        </Container>
    );
};