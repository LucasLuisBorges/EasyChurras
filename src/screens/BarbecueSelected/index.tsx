import React from "react";
import { ScrollView, StatusBar } from "react-native";
import { TitleButtonSelected } from "../../components/TitleButtonSelected";

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
    BarbecueTitle
} from './styles'

export function BarbecueSelected() {
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
                        <Hour>1-3 horas</Hour>
                        <Price>R$ 25,00</Price>
                    </PriceWrapper>
                    <QuantGPeople>300g /pessoa</QuantGPeople>
                </PriceHourWapper>

                <BarbecuePriceWrapper>
                    <BarbecueTitle>Carnes</BarbecueTitle>
                </BarbecuePriceWrapper>
                
            </ScrollView>
        </Container>
    )
}