import React from "react";
import { ScrollView, StatusBar } from "react-native";

import * as S from "./styles";

import { MenuSelect } from "../../components/MenuSelect";
import { BackButton } from "../../components/BackButton";
import { ActionButton } from "../../components/ActionButton";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

export function MainMenu() {
  const theme = useTheme();
  const image = {
    uri: "https://jpimg.com.br/uploads/2022/02/design-sem-nome-2022-02-08t091532.650.jpg",
  };

  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  return (
    <S.Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <S.ProfileWrapper>
          <BackButton onPress={handleBack} />

          <S.InfoWrapper>
            <S.Profile
              source={image}
              resizeMode={"cover"}
              imageStyle={{ borderRadius: 36 }}
            />

            <S.Name>Maria</S.Name>
          </S.InfoWrapper>
        </S.ProfileWrapper>

        <MenuSelect iconActive={true} iconName="user" title="Minha Conta" />
        <MenuSelect iconActive={true} iconName="bookmark" title="Favoritos" />
        <MenuSelect
          iconActive={true}
          iconName="message-circle"
          title="Conversas"
        />
        <MenuSelect iconActive={true} iconName="bell" title="Notificações" />
        <MenuSelect
          iconActive={true}
          iconName="settings"
          title="Configurações"
        />
        <MenuSelect iconActive={false} title="FAC e Feedbacks" />
        <MenuSelect iconActive={false} title="Central de ajuda" />
        <MenuSelect iconActive={false} title="Sobre o EasyChurras" />
        <MenuSelect iconActive={false} title="Termos de uso" />
        <MenuSelect iconActive={false} title="Privacidade" />
        <MenuSelect iconActive={false} title="Avalie na App Store" />
        <MenuSelect iconActive={false} title="Siga nossas redes sociais" />

        <S.Button>
          <ActionButton
            colorText={theme.colors.text_light}
            colorBorder={theme.colors.main}
            color={theme.colors.main}
            title="Sair"
          />
        </S.Button>
      </ScrollView>
    </S.Container>
  );
}
