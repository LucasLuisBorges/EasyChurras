import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.ImageBackground`
  width: 100%;
  height: 300px;

  align-items: center;
  justify-content: center;

`;

export const SearchInput = styled.TextInput`
  width: 80%;
  height: 55px;

  background-color: ${({ theme }) => theme.colors.background_primary};

  text-align: center;

  padding: 15px;
  border-radius: 25px;
  margin-bottom: 46px;
`;

export const TitleHeader = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(22)}px;
  line-height: 32px;

  text-transform: uppercase;
`;

export const ProfessionalsWrapper = styled.View`
  width: 100%;

  margin-top: 30px;
`;

export const CardWrapper = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingLeft: 40,
    paddingBottom: 20,
  },
  showsHorizontalScrollIndicator: false
})``;

export const BeefWrapper = styled.View`

`;

export const BarbecueWrapper = styled.View`

`;