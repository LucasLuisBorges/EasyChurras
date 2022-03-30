import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
    width: 80%;
    flex-direction: row;
    justify-content: space-between;

    border-bottom-color: #f2f2f2;
    border-bottom-width: 1px;

    padding-bottom: 20px;
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