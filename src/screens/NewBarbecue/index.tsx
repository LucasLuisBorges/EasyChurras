import React from 'react';
import { ScrollView } from 'react-native';

import { BackInput } from '../../components/BackInput';
import { BarbecueType } from '../../components/BarbecueType';
import { Recents } from '../../components/Recents';

import * as S from './styles';

export function NewBarbecue(){
  return (
    <S.Container>
      <S.InputWrapper>
        <BackInput 
          text='Qual tipo de churrasco você quer?'
        />
      </S.InputWrapper>

      <ScrollView 
        showsVerticalScrollIndicator={false}
      >
        <S.RecentSearch>
          <S.Title>
            Buscas Recentes
          </S.Title>
          <S.RecentWrapper>
            <Recents 
              title='Churrasco Brasileiro'
            />
            <Recents
              title='Churrasco Gaúcho'
            />
          </S.RecentWrapper>
        </S.RecentSearch>

        <S.ExploreWrapper>
          <S.Title>
            Explore os tipos de churraasco
          </S.Title>

          <BarbecueType title='Churrasco Vegano' />
          <BarbecueType title='Churrasco Brasileiro' />
          <BarbecueType title='Churrasco Americano' />
          <BarbecueType title='Churrasco Coreano' />
          <BarbecueType title='Churrasco ano' />
        </S.ExploreWrapper>
      </ScrollView>
    </S.Container>
  );
}