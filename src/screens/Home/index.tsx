import React from "react";
import { ScrollView, StatusBar } from "react-native";

import { ProfessionalsCard } from "../../components/ProfessionalsCard";
import { Title } from "../../components/Title";
import { BarbecueCard } from "../../components/BarbecueCard";

import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const image = {
    uri: "https://s2.glbimg.com/nuTa0sOZZ-hoALspr80pbseh5-s=/0x0:2000x1333/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/e/O/FcOCQqScGCmqLBxcssww/condor-12.jpg",
  };

  const navigation = useNavigation()

  function handleNavigation() {
    navigation.navigate('BarbecueSelected');
  }

  return (
    <S.Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <S.Header source={image} resizeMode={"cover"}>
          <S.SearchInput placeholder="Que tipo de churrasco você quer?" />
          <S.TitleHeader>VENHA PARA O MUNDO{"\n"}DO CHURRASCO!</S.TitleHeader>
        </S.Header>

        <S.ProfessionalsWrapper>
          <Title title="Profissionais" subTitle="perto de você" />

          <S.CardWrapper horizontal>
            <ProfessionalsCard
              distance="3,4 km"
              name="Paulo Vieira"
              type="Churrasco Gaúcho"
            />
            <ProfessionalsCard
              distance="2,8 km"
              name="Marcos Silva"
              type="Churrasco vegano"
            />
            <ProfessionalsCard
              distance="2,8 km"
              name="Marcos Silva"
              type="Churrasco vegano"
            />
          </S.CardWrapper>
        </S.ProfessionalsWrapper>

        <S.BarbecueWrapper>
          <Title title="o mundo do" subTitle="Churrasco" />

          <S.CardWrapper horizontal>
            <BarbecueCard title="Brasileiro" onPress={handleNavigation} />
            <BarbecueCard title="Brasileiro" />
            <BarbecueCard title="Brasileiro" />
          </S.CardWrapper>
        </S.BarbecueWrapper>

        <S.BeefWrapper>
          <Title title="O mundo das" subTitle="carnes" />

          <S.CardWrapper horizontal>
            <BarbecueCard title="Picanha" />
            <BarbecueCard title="Fraldinha" />
            <BarbecueCard title="Alcatra" />
          </S.CardWrapper>
        </S.BeefWrapper>
      </ScrollView>
    </S.Container>
  );
}
