import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

import { MaterialIcons } from '@expo/vector-icons'

import * as S from './styles';

interface Props extends TouchableOpacityProps {
  color?: string;
  size?: number;
}

export function BackButton( {color, size = 36, ...rest} : Props ){
  const theme = useTheme();

  return (
    <S.Container {...rest}>
      <MaterialIcons
        name='chevron-left'
        size={size}
        color={color ? color : theme.colors.arrow}
      />
    </S.Container>
  );
}