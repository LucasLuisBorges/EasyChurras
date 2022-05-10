import React from "react";
import { ScrollView, StatusBar } from "react-native";
import { BarbecuePrice } from "../../components/BarbecuePrice";
import { Button } from "../../components/Button";
import { AntDesign } from "@expo/vector-icons";

import * as S from './styles'
import { useTheme } from "styled-components";

import { HeaderComp } from "../../components/HeaderComp";

export function BarbecueSelectedStep1() {
    const theme = useTheme();

    return (
        <S.Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <HeaderComp 
                    title="Tipo de Churrasco"
                />
                <S.Title>
                    Churrasco Brasileiro
                </S.Title>
                <S.SubTitle>
                    Sobre o churrasco
                </S.SubTitle>

                <S.PriceHourWapper>
                    <S.PriceWrapper>
                        <S.TimeWrapper>
                            <AntDesign 
                                name="clockcircle"
                                color={theme.colors.textOpacity}
                                size={16}
                            />
                            <S.Hour>
                                1-3 horas
                            </S.Hour>
                        </S.TimeWrapper>
                        <S.Price>
                            R$ 25,00
                        </S.Price>
                    </S.PriceWrapper>
                    <S.PeopleWrapper>
                        <AntDesign
                            name="clockcircle"
                            color={theme.colors.textOpacity}
                            size={16}
                        />
                        <S.QuantGPeople>
                            300g /pessoa
                        </S.QuantGPeople>
                    </S.PeopleWrapper>
                </S.PriceHourWapper>

                <S.BarbecueTitle>
                    Carnes
                </S.BarbecueTitle>
                <S.BarbecuePriceWrapper>
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
                    />                    <BarbecuePrice
                        name="Picanha"
                        price="87,49"
                    />
                </S.BarbecuePriceWrapper>
            </ScrollView>
            <S.ButtonWrapper>
                <Button
                    title="Selecionar"
                    onPress={() => { }}
                />
            </S.ButtonWrapper>
        </S.Container>
    )
}