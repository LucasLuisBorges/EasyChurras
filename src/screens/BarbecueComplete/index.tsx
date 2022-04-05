import React from 'react';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { TitleButton } from '../../components/TitleButton';

import {
  Container,
  WrapperMenu,
  Title,
  Image
} from './styles';

export function BarbecueComplete(){
  const image = {uri: 'https://s2.glbimg.com/nuTa0sOZZ-hoALspr80pbseh5-s=/0x0:2000x1333/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/e/O/FcOCQqScGCmqLBxcssww/condor-12.jpg'}
  return (
    <Container>
      <WrapperMenu>
        <BackButton size={41} />

        <Title>Churrasco da Familia</Title>
      </WrapperMenu>

      <Image source={image} />

    </Container>
  );
}