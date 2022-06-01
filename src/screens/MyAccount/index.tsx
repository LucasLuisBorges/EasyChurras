import React from "react";
import { StatusBar } from "react-native";
import { BackButton } from "../../components/BackButton";

import StarSvg from "../../assets/star.svg";

import * as S from "./styles";
import { MenuSelect } from "../../components/MenuSelect";
import { useNavigation } from "@react-navigation/native";

export function MyAccount() {
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
      <S.WrapperMenu>
        <BackButton size={41} onPress={handleBack} />

        <S.Title>Minha Conta</S.Title>
      </S.WrapperMenu>

      <S.WrapperProfile>
        <S.WrapperHeader>
          <S.Image source={image} resizeMode={"cover"} />
          <S.Name>Maria Rosa</S.Name>
          <S.WrapperPoint>
            <StarSvg height={26} width={26} />
            <S.PointsText>4,9 pts</S.PointsText>
          </S.WrapperPoint>
        </S.WrapperHeader>

        <S.WrapperStatus>
          <S.Performed>
            <S.Count>20</S.Count>
            <S.SubTitle>{`Pedido\nRealizado`}</S.SubTitle>
          </S.Performed>

          <S.Feedback>
            <S.Count>19</S.Count>
            <S.SubTitle>{`Avaliações\nRecebidas`}</S.SubTitle>
          </S.Feedback>
        </S.WrapperStatus>

        <S.WrapperInfo>
          <S.TitleInfo>Minha Conta</S.TitleInfo>

          <S.AccountInfoWrapper>
            <MenuSelect title="Meus Endereços" iconActive={true} />
            <MenuSelect title="Forma de pagamento" iconActive={true} />
            <MenuSelect title="Editar dados" iconActive={true} />
          </S.AccountInfoWrapper>
        </S.WrapperInfo>
      </S.WrapperProfile>
    </S.Container>
  );
}
