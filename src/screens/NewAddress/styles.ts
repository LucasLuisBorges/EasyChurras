import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import theme from '../../styles/theme';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_primary};
  margin-top: ${getStatusBarHeight() + 0}px;
`;

export const WrapperMenu = styled.View`
  flex-direction: row;
  align-items: center;
  
  margin: 18px 0 60px 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(14)}px;

  text-transform: uppercase;
  letter-spacing: 2px;

  margin-left: 15%;
`;

export const WrapperInput = styled.View`
    width: 80%;
    align-self: center;
`;

export const JobArea = styled.View``;

export const TitleInput = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.primary_500};

    text-transform: uppercase;

    margin-bottom: 5px;
`;

export const JobInput = styled.TextInput`
    border-width: 1px;
    border-color: ${theme.colors.background_secondary};

    border-radius: 4px;
    padding: 10px;
`;
