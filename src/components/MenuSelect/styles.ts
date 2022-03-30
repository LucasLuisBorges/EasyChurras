import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 80%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-bottom-color: #f2f2f2;
    border-bottom-width: 1px;

    padding-bottom: 15px;
    margin-top: 10px;
`;

export const Title = styled.Text`
    margin-left: 18px;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(16)}px;
`;

export const Wrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const WrapperView = styled.View`
    flex-direction: row;
    justify-content: space-between;
`