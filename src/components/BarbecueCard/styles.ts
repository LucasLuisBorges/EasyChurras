import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  margin-right: 14px;
`;

export const TextWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(12)}px;

  margin-top: 5px;
`;
