import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;

  margin-top: ${getStatusBarHeight() + 0}px;

  flex-direction: column;
  justify-content: space-between;
`;

export const WrapperMenu = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 18px;
  margin-left: 20px;
`;

export const LogInfo = styled.View`
  height: 110px;

  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(14)}px;

  text-align: center;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(12)}px;

  text-align: center;
`;

export const ButtonWrapper = styled.View`
  padding: 25px 0 25px 0;
`;

export const Wrapper = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const ProfessionalsTitle = styled.Text`
  
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(14)}px;

  text-transform: uppercase;
`;

export const SubTitleHeader = styled.Text`
  
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(14)}px;

  text-transform: uppercase;
`;

export const TitleWrapper = styled.TouchableOpacity``;

export const SubtitleWrapper = styled.TouchableOpacity``;
