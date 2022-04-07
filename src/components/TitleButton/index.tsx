import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import {
  Wrapper,
  ProfessionalsTitle,
  SubTitle,
  TitleWrapper,
  SubtitleWrapper
} from './styles';

interface Props {
  title: string;
  subTitle: string;
}

export function TitleButton({title, subTitle} : Props){
  const [titleState, setTitleState] = useState(true);
  const [subTitleState, setSubTitleState] = useState(false)

  function TitleClickStyle() {
    if(titleState === false) {
      setTitleState(true);
      setSubTitleState(false);
    }
  }

  function SubTitleClickStyle() {
    if(subTitleState === false) {
      setSubTitleState(true);
      setTitleState(false);
    }
  }

  return (
    <Wrapper>
      <TitleWrapper onPress={TitleClickStyle}>
        <ProfessionalsTitle style={titleState ? styles.text2 : styles.text1}>{title}</ProfessionalsTitle>
      </TitleWrapper>

      <SubtitleWrapper onPress={SubTitleClickStyle}>
        <SubTitle style={titleState ? styles.text1 : styles.text2}>{`    ${subTitle}`}</SubTitle>
      </SubtitleWrapper>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  text1: {
    color: '#a6a6a6',
  },
  text2: {
    color: '#232323',
  }
})