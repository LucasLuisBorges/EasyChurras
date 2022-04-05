import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 270px;
  height: 50px;

  background-color: ${({ theme }) => theme.colors.success_light};
  border-radius: 25px;

  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(16)}px;
`;