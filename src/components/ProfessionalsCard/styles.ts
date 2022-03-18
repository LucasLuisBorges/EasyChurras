import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  margin-right: 70px;
`;

export const WrapperImage = styled.View`
  margin-right: 9px;
`;

export const WrapperDetail = styled.View``;

export const Distance = styled.Text`
  color: ${({ theme }) => theme.colors.success_light};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const Type = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.primary_300};
`;

export const WrapperStar = styled.View`
  flex-direction: row;
`;
