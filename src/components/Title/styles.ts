import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const TitleWrapper = styled.View`
  align-items: center;

  margin-left: ${RFValue(29)}px;

  flex-direction: row;
`;

export const ProfessionalsTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(17)}px;

  text-transform: uppercase;

  margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(17)}px;

  text-transform: uppercase;

  margin-bottom: 16px;
`;