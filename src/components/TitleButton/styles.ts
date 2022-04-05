import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const TitleWrapper = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const ProfessionalsTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(14)}px;

  text-transform: uppercase;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.textOpacity};
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(14)}px;

  text-transform: uppercase;
`;

export const Wrapper1 = styled.TouchableOpacity``;

export const Wrapper2 = styled.TouchableOpacity``;