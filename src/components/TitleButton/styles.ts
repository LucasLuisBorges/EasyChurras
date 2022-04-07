import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const ProfessionalsTitle = styled.Text`
  
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(14)}px;

  text-transform: uppercase;
`;

export const SubTitle = styled.Text`
  
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(14)}px;

  text-transform: uppercase;
`;

export const TitleWrapper = styled.TouchableOpacity``;

export const SubtitleWrapper = styled.TouchableOpacity``;