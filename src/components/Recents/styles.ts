import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 80%;
  
  align-self: center;
`;

export const TitleWrapper = styled.TouchableOpacity`

`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};

  margin-left: 35px;
  margin-bottom: 22px;
`;

export const Border = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.line};
  margin-bottom: 20px;
`;