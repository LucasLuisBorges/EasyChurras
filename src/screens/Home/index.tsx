import React from 'react';
import { ScrollView, StatusBar } from 'react-native';

import { ProfessionalsCard } from '../../components/ProfessionalsCard';
import { Title } from '../../components/Title';
import { BarbecueCard } from '../../components/BarbecueCard';

import {
  Container,
  Header,
  SearchInput,
  TitleHeader,
  ProfessionalsWrapper,
  CardWrapper,
  BeefWrapper,
  BarbecueWrapper
} from './styles';

export function Home(){
  const image = {uri: 'https://s2.glbimg.com/nuTa0sOZZ-hoALspr80pbseh5-s=/0x0:2000x1333/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/e/O/FcOCQqScGCmqLBxcssww/condor-12.jpg'}
  return (
    <Container>

    <ScrollView
      showsVerticalScrollIndicator={false}
    >

      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Header source={image} resizeMode={'cover'} >
        <SearchInput placeholder='Que tipo de churrasco você quer?' />
        <TitleHeader>
          VENHA PARA O MUNDO{'\n'}DO CHURRASCO!
        </TitleHeader>
      </Header>

        <ProfessionalsWrapper>
          <Title
            title='Profissionais'
            subTitle='perto de você'
          />

          <CardWrapper horizontal >
            <ProfessionalsCard 
              distace='3,4 km'
              name='Paulo Vieira'
              type='Churrasco Gaúcho'
            />
            <ProfessionalsCard
              distace='2,8 km'
              name='Marcos Silva'
              type='Churrasco vegano'
            />

            <ProfessionalsCard
              distace='2,8 km'
              name='Marcos Silva'
              type='Churrasco vegano'
            />
          </CardWrapper>  

        </ProfessionalsWrapper>

        <BarbecueWrapper>
          <Title
            title='o mundo do'
            subTitle='Churrasco'
          />

          <CardWrapper horizontal>
            <BarbecueCard
              title='Brasileiro'
            />
            <BarbecueCard
              title='Brasileiro'
            />
            <BarbecueCard
              title='Brasileiro'
            />
          </CardWrapper>

        </BarbecueWrapper>

        <BeefWrapper>
          <Title
            title='O mundo das'
            subTitle='carnes'
          />

          <CardWrapper horizontal>
            <BarbecueCard
              title='Picanha'
            />
            <BarbecueCard
              title='Fraldinha'
            />
            <BarbecueCard
              title='Alcatra'
            />
          </CardWrapper>
        </BeefWrapper>

      </ScrollView>

    </Container>
  );
}