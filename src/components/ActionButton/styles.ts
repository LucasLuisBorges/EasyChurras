import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ButtonProps {
  color: string
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  width: 120px;
  height: 35px;

  background-color: ${({ color }) => color};
  border-radius: 20px;
  margin: 10px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_light};
`;