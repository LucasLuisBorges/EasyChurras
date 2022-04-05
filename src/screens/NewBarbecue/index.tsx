import React from 'react';
import { ScrollView } from 'react-native';

import { BackInput } from '../../components/BackInput';
import { BarbecueType } from '../../components/BarbecueType';
import { Recents } from '../../components/Recents';

import {
  Container,
  InputWrapper,
  RecentSearch,
  Title,
  RecentWrapper,
  ExploreWrapper
} from './styles';

export function NewBarbecue(){
  return (
    <Container>
      <InputWrapper>
        <BackInput text='Qual tipo de churrasco você quer?'/>
      </InputWrapper>

      <ScrollView showsVerticalScrollIndicator={false}>
        <RecentSearch>
          <Title>Buscas Recentes</Title>
          <RecentWrapper>
            <Recents title='Churrasco Brasileiro'/>
            <Recents title='Churrasco Gaúcho'/>
          </RecentWrapper>
        </RecentSearch>

        <ExploreWrapper>
          <Title>Explore os tipos de churraasco</Title>

          <BarbecueType title='Churrasco Vegano' />
          <BarbecueType title='Churrasco Brasileiro' />
          <BarbecueType title='Churrasco Americano' />
          <BarbecueType title='Churrasco Coreano' />
          <BarbecueType title='Churrasco ano' />
        </ExploreWrapper>
      </ScrollView>
    </Container>
  );
}