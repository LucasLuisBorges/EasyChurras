import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { BackButton } from '../../components/BackButton';

import * as S from './styles';

export function BarbecueComplete(){
  const image = 
  {uri: 'https://s2.glbimg.com/nuTa0sOZZ-hoALspr80pbseh5-s=/0x0:2000x1333/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/e/O/FcOCQqScGCmqLBxcssww/condor-12.jpg'}
  
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  return (
    <S.Container>
      <S.WrapperMenu>
        <BackButton size={41} onPress={handleBack}/>
        <S.Title>
          Churrasco da Familia
        </S.Title>
      </S.WrapperMenu>
      <S.Image 
        source={image}
      />
    </S.Container>
  );
}