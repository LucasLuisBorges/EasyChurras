import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

import { MaterialIcons } from '@expo/vector-icons'

import {
  Container
} from './styles';

interface Props extends TouchableOpacityProps {
  color?: string;
}

export function BackButton( {color, ...rest} : Props ){
  const theme = useTheme();

  return (
    <Container {...rest}>
      <MaterialIcons
        name='chevron-left'
        size={36}
        color={color ? color : theme.colors.arrow}
      />
    </Container>
  );
}