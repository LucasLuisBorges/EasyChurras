import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { SendButton } from '../SendButton';


import {
  Container,
  BarbecueWrapper,
  Wrapper,
  Image,
  Title,
  Border
} from './styles';

interface IProps extends TouchableOpacityProps {
  title: string;
}

export function BarbecueType({ title, ...rest }: IProps){
  const image = {uri: 'https://s2.glbimg.com/nuTa0sOZZ-hoALspr80pbseh5-s=/0x0:2000x1333/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/e/O/FcOCQqScGCmqLBxcssww/condor-12.jpg'}
  return (
    <Container>
      <BarbecueWrapper {...rest}>
        <Wrapper>
          <Image source={image}/>

          <Title>{title}</Title>
        </Wrapper>

        <SendButton size={41}/>
      </BarbecueWrapper>

      <Border />
    </Container>
  );
}