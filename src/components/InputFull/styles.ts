import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../styles/theme";

export const Container = styled.View`

`;

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