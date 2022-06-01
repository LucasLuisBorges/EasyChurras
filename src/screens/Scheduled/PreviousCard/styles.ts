import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 290px;
  height: 100px;

  border-radius: 15px;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Image = styled.Image`
  height: 80px;
  width: 80px;

  border-radius: 15px;
`;

export const WrapperInfo = styled.View`
  margin-left: 5px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.text}
`;

export const Date = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.text}
`;