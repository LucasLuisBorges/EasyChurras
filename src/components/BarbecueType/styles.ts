import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 80%;
  align-self: center;
`;

export const BarbecueWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 75px;
  height: 75px;
  
  border-radius: 15px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.primary_600};

  margin-left: 8px;
`;

export const Border = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.line};
  margin-bottom: 20px;
`;