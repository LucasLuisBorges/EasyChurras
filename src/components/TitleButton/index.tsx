import React, { useState } from 'react';

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
  const [state, setState] = useState(true);
  return (
    <Wrapper>
      <TitleWrapper>
        <ProfessionalsTitle>{title}</ProfessionalsTitle>
      </TitleWrapper>

      <SubtitleWrapper >
        <SubTitle>{`    ${subTitle}`}</SubTitle>
      </SubtitleWrapper>
    </Wrapper>
  );
}