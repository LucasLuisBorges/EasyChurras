import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const InputWrapper = styled.View`
  margin: 18px 0 11px 20px;
`;

export const RecentSearch = styled.View`
  
`;

export const Title = styled.Text`
  font-size: ${RFValue(11)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.primary_700};

  text-transform: uppercase;

  margin: 0 0 25px 33px;
`;

export const RecentWrapper = styled.View`

`;

export const ExploreWrapper  = styled.View``;
