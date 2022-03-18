import React from 'react';
import { StatusBar } from 'react-native';

import HeaderPng from '../../assets/header.svg';

import {
  Container,
  Header,
  SearchInput,
  Title
} from './styles';

export function Home(){
  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Header>
        <SearchInput placeholder='Que tipo de churrasco você quer?' />
        <Title>
          VENHA PRO MUNDO {'\n'} DO CHURRASCO!
        </Title>
      </Header>
    </Container>
  );
}