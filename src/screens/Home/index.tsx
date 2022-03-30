import React from 'react';
import { ScrollView, StatusBar } from 'react-native';

import { CouponCard } from '../../components/CouponCard';
import { ProfessionalsCard } from '../../components/ProfessionalsCard';
import { Title } from '../../components/Title';
import { BarbecueCard } from '../../components/BarbecueCard';

import {
  Container,
  Header,
  SearchInput,
  TitleHeader,
  CouponWrapper,
  WrapperList,
  ProfessionalsWrapper,
  CardWrapper,
  BeefWrapper,
  BarbecueWrapper
} from './styles';

export function Home(){
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
      <Header>
        <SearchInput placeholder='Que tipo de churrasco você quer?' />
        <TitleHeader>
          VENHA PARA O MUNDO{'\n'}DO CHURRASCO!
        </TitleHeader>
      </Header>

      

        <CouponWrapper>
          <WrapperList>
            <CouponCard
              title='Fim de semana!!!'
              subTitle='60% OFF'
            />
          </WrapperList>
        </CouponWrapper>

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