import React from "react";
import { StatusBar } from "react-native";
import { TitleButtonSelected } from "../../components/TitleButtonSelected";

import {
    Container,
    Header,
    Title,
    SubTitle
} from './styles'

export function BarbecueSelected() {
    const image = {
        uri: 'https://www.lopessupermercados.com.br/portalrevista/wp-content/uploads/2019/11/shutterstock_413328976-600x380.jpg'
    }
    return (
        <Container>
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
        </Container>
    )
}