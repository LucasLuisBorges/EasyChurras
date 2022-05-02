import React from "react";
import { ScrollView, StatusBar } from "react-native";
import { BarbecuePrice } from "../../components/BarbecuePrice";
import { Button } from "../../components/Button";
import { AntDesign } from "@expo/vector-icons";

import {
    Container,
    Title,
    SubTitle,
    PriceHourWapper,
    PriceWrapper,
    Hour,
    Price,
    QuantGPeople,
    BarbecuePriceWrapper,
    BarbecueTitle,
    ButtonWrapper,
    TimeWrapper,
    PeopleWrapper,
} from './styles'
import { useTheme } from "styled-components";

import { HeaderComp } from "../../components/HeaderComp";

export function BarbecueSelectedStep1() {
    const theme = useTheme();

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <ScrollView showsVerticalScrollIndicator={false}>

                <HeaderComp title="Tipo de Churrasco"/>

                <Title>Churrasco Brasileiro</Title>
                <SubTitle>Sobre o churrasco</SubTitle>

                <PriceHourWapper>
                    <PriceWrapper>
                        <TimeWrapper>
                            <AntDesign name="clockcircle" color={theme.colors.textOpacity} size={16} />
                            <Hour>1-3 horas</Hour>
                        </TimeWrapper>
                        <Price>R$ 25,00</Price>
                    </PriceWrapper>
                    <PeopleWrapper>
                        <AntDesign name="clockcircle" color={theme.colors.textOpacity} size={16} />
                        <QuantGPeople>300g /pessoa</QuantGPeople>
                    </PeopleWrapper>
                </PriceHourWapper>

                <BarbecueTitle>Carnes</BarbecueTitle>

                <BarbecuePriceWrapper>
                    <BarbecuePrice
                        name="Picanha"
                        price="8,99"
                    />

                    <BarbecuePrice
                        name="Maminha"
                        price="8,99"
                    />

                    <BarbecuePrice
                        name="fraldinha"
                        price="8,99"
                    />

                    <BarbecuePrice
                        name="Contra filé"
                        price="5,99"
                    />

                    <BarbecuePrice
                        name="Coxinha da asa"
                        price="87,99"
                    />

                    <BarbecuePrice
                        name="Picanha"
                        price="87,49"
                    />
                </BarbecuePriceWrapper>
            </ScrollView>

            <ButtonWrapper>
                <Button
                    title="Selecionar"
                    onPress={() => { }}
                />
            </ButtonWrapper>
        </Container>
    )
}