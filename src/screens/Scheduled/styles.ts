import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

interface IProps {
  textColor: string;
}

export const Container = styled.View`
  height: 100%;
  margin-top: ${getStatusBarHeight() + 0}px;
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

  margin: auto;
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
  position: absolute;
  bottom: 0;
  padding: 25px 0 50px 0;

  align-self: center;
`;

export const Wrapper = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const WrapperCard = styled.View`
  align-self: center;

  margin-top: 15px;
`;

export const ProfessionalsTitle = styled.Text<IProps>`
  
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(14)}px;

  text-transform: uppercase;

  color: ${({ textColor }) => textColor}
`;

export const SubTitleHeader = styled.Text<IProps>`
  
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(14)}px;

  text-transform: uppercase;

  color: ${({ textColor }) => textColor}
`;

export const TitleWrapper = styled.TouchableOpacity``;

export const SubtitleWrapper = styled.TouchableOpacity``;
