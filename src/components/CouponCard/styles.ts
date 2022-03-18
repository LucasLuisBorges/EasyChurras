import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 80%;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.header};

  padding: 27px 0 51px 0;
  margin-top: 22px;
  margin-right: 10px;

  border-radius: 29px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.background_primary};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(14)}px;

  text-transform: uppercase;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.background_primary};
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(22)}px;
  
  text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.6);
`;