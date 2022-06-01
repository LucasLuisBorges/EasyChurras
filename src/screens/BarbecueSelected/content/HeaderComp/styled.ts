import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

export const HeaderWrapper = styled.ImageBackground`
    width: 100%;
    height: 375px;
`;

export const TitleWrapper = styled.View`
width: 100%;
`;

export const Container = styled.View`
    width: 80%;

    align-items: center;
    align-self: center;
    flex-direction: row;

    margin-top: ${getStatusBarHeight() + 20}px;

    justify-content: space-between;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(16)}px;
  line-height: 32px;

  text-transform: uppercase;
`;

export const IconWrapper = styled.TouchableOpacity`
    
`;