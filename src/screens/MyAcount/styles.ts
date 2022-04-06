import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_secondary};
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

export const WrapperProfile = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.header};

  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`;

export const WrapperHeader = styled.View`
  align-items: center;
  margin-top: -55px;
`;

export const Image = styled.Image`
    width: 126px;
    height: 126px;
    border-radius: 63px;

    border: 3px solid ${({ theme }) => theme.colors.background_primary};
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(24)}px;
`;

export const WrapperPoint = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 5px;
`;

export const PointsText = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(16)}px;

  margin-left: 5px;
`;

export const WrapperStatus = styled.View`
  width: 80%;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;

  margin-top: 16px;
  margin-bottom: 26px;
`;

export const Performed = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Count = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(36)}px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(12)}px;

  margin-left: 16px;
`;

export const Feedback = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WrapperInfo = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_primary};

  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`;

export const TitleInfo = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(14)}px;

  text-transform: uppercase;
  letter-spacing: 2px;

  align-self: center;
  padding: 33px 0 33px 0;
`;

export const AcountInfoWrapper = styled.View`
  width: 80%;
  align-self: center;
`;

