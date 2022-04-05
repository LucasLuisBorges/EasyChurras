import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;

  margin-top: ${getStatusBarHeight() + 0}px;
`;

export const WrapperMenu = styled.View`
  flex-direction: row;
  align-items: center;
  
  margin: 18px 0 30px 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(14)}px;

  text-transform: uppercase;
  letter-spacing: 2px;

  margin-left: 5px;
`;

export const Image = styled.ImageBackground`
  width: 100%;
  height: 285px;
`;