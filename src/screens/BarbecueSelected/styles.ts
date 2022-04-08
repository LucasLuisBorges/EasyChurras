import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.ImageBackground`
    width: 100%;
    height: 375px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text_dark};
    font-family: ${({ theme }) => theme.fonts.primary_700};
    font-size: ${RFValue(24)}px;

    align-items: center;
    align-self: center;

    margin-top: 20px;
`;

export const SubTitle = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: ${RFValue(14)}px;

    align-items: center;
    align-self: center;

    margin-top: 10px;
`;