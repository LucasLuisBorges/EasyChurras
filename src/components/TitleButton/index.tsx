import React, { useState } from 'react';

import {
  TitleWrapper,
  ProfessionalsTitle,
  SubTitle,
  Wrapper1,
  Wrapper2
} from './styles';

interface Props {
  title: string;
  subTitle: string;
}

export function TitleButton({title, subTitle} : Props){
  const [state, setState] = useState(true);
  return (
    <TitleWrapper>
      <Wrapper1 >
        <ProfessionalsTitle>{title}</ProfessionalsTitle>
      </Wrapper1>

      <Wrapper2 >
        <SubTitle>{`    ${subTitle}`}</SubTitle>
      </Wrapper2>
    </TitleWrapper>
  );
}