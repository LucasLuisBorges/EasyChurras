import React from "react";
import { ScrollView, StatusBar } from "react-native";
import { BarbecuePrice } from "../../components/BarbecuePrice";
import { AntDesign } from "@expo/vector-icons";

import {
    Container,
    Title,
    SubTitleWrapper,
    SubTitle,
    PriceHourWapper,
    PriceWrapper,
    Hour,
    Price,
    BarbecuePriceWrapper,
    TimeWrapper,
    ButtonWrapper
} from './styled';

import { useTheme } from "styled-components";

import { HeaderComp } from "../../components/HeaderComp";
import { Button } from "../../components/Button";

export function BarbecueSelectedStep2() {
    const theme = useTheme();

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <ScrollView showsVerticalScrollIndicator={false}>

                <HeaderComp title="Tipo de Churrasco" />

                <Title>Acompanhamento</Title>
                <SubTitleWrapper>
                    <SubTitle>
                        Selecione os acompanhamentos do churrasco brasileiro.
                    </SubTitle>
                </SubTitleWrapper>

                <PriceHourWapper>
                    <PriceWrapper>
                        <TimeWrapper>
                            <AntDesign name="clockcircle" color={theme.colors.textOpacity} size={16} />
                            <Hour>100g /pessoa</Hour>
                        </TimeWrapper>
                        <Price>R$ 25,00</Price>
                    </PriceWrapper>
                </PriceHourWapper>

                <BarbecuePriceWrapper>
                    <BarbecuePrice
                        name="Arroz"
                        price="8,99"
                    />

                    <BarbecuePrice
                        name="Pão de alho"
                        price="8,99"
                    />

                    <BarbecuePrice
                        name="Maionese de batata"
                        price="8,99"
                    />

                    <BarbecuePrice
                        name="Queijo coalho"
                        price="8,99"
                    />

                    <BarbecuePrice
                        name="Farofa"
                        price="8,99"
                    />
                </BarbecuePriceWrapper>
            </ScrollView>
            <ButtonWrapper>
                <Button title="Próximo" />
            </ButtonWrapper>

        </Container>
    )
}