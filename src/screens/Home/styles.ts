import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 300px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.main};
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

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(26)}px;
  line-height: 32px;
`;