import styled from "styled-components/native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 90%;
    margin: auto;
    margin-top: ${getStatusBarHeight() + 26}px;
`;

export const ProfileWrapper = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;
    margin-bottom: 45px;
`;

export const Profile = styled.View`
    margin-left: 32px;
`;

export const Name = styled.Text`
    margin-left: 19px;

    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary_700};
`;

export const Button = styled.View`
    align-items: center;
    padding: 10px;
`;