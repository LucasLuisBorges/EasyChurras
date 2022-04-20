import { Checkbox } from "react-native-paper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    flex-direction: row;

    align-items: center;

    justify-content: space-between;
`;

export const CheckWrapper = styled.View`
    display: flex;
    flex-direction: row;

    align-items: center;

    justify-content: space-around;
`;

export const Check = styled(Checkbox)`
    width: 20px;
    height: 20px;
    background-color: blue;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(14)}px;
`;

export const Price = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
`;
