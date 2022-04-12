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

export const PriceHourWapper = styled.View`
    width: 70%;
    align-self: center;

    margin-top: 25px;
`;

export const PriceWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: 10px;
`;

export const Hour = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary_600};
    font-size: ${RFValue(14)}px;
`;

export const Price = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary_700};
    font-size: ${RFValue(16)}px;
`;

export const QuantGPeople = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary_600};
    font-size: ${RFValue(14)}px;
`;

export const BarbecuePriceWrapper = styled.View`
    align-self: center;
    margin-top: 15px;
`;

export const BarbecueTitle = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary_600};
    font-size: ${RFValue(16)}px;
`;
