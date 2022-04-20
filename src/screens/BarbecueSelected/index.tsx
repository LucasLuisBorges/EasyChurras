import React from "react";
import { ScrollView, StatusBar } from "react-native";
import { BarbecuePrice } from "../../components/BarbecuePrice";
import { Button } from "../../components/Button";
import { TitleButtonSelected } from "../../components/TitleButtonSelected";
import { AntDesign } from "@expo/vector-icons";

import {
    Container,
    Header,
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
    PeopleWrapper
} from './styles'
import { useTheme } from "styled-components";

export function BarbecueSelected() {
    const theme = useTheme();
    const image = {
        uri: 'https://www.lopessupermercados.com.br/portalrevista/wp-content/uploads/2019/11/shutterstock_413328976-600x380.jpg'
    }
    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="transparent"
                    translucent
                />
                <Header source={image}>
                    <TitleButtonSelected title="Tipo de churrasco" />
                </Header>

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
                        price="8,99"
                    />

                    <BarbecuePrice
                        name="Coxinha da asa"
                        price="8,99"
                    />

                    <BarbecuePrice
                        name="Picanha"
                        price="8,99"
                    />
                </BarbecuePriceWrapper>

                <ButtonWrapper>
                    <Button
                        title="Selecionar"
                        onPress={() => { }}
                    />
                </ButtonWrapper>
            </ScrollView>
        </Container>
    )
}