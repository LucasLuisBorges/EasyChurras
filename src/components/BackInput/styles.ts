import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: ${getStatusBarHeight() + 0}px;
  flex-direction: row;

  align-items: center;
`;

export const InputArea = styled.TextInput`
  width: 250px;
  height: 50px;

  border-radius: 25px;
  padding: 10px;

  border: 1px solid ${({ theme }) => theme.colors.line};
`;