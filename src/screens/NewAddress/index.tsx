import React from 'react'
import { StatusBar } from 'react-native'
import { BackButton } from '../../components/BackButton'
import { InputFull } from '../../components/InputFull'
import { InputMedium } from '../../components/InputMedium'
import { InputSmall } from '../../components/InputSmall'

import {
  Container,
  WrapperMenu,
  Title,
  WrapperInput,
  JobArea
} from './styles'

export function NewAddress() {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
        translucent
      />
      <WrapperMenu>
        <BackButton size={41} />

        <Title>Novo Endereço</Title>
      </WrapperMenu>

      <WrapperInput>
        <InputFull
          title='Nome do endereço'
          placeholder='TRABALHO'
        />
        <JobArea>
          <InputMedium
            title='Cep'
            placeholder='00000-000'
          />

          <InputSmall
            title='Número'
            placeholder='0000'
            inNumeric={true}
          />
        </JobArea>

        <InputFull
          title='Nome da rua'
          placeholder='Nome da rua'
        />

        <JobArea>
          <InputMedium
            title='Cidade'
            placeholder='Nome da cidade'
          />

          <InputSmall
            title='Estado'
            placeholder='SC'
            inNumeric={false}
          />
        </JobArea>
      </WrapperInput>
    </Container>
  )
}
