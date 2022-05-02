import React from 'react'
import { StatusBar } from 'react-native'
import { BackButton } from '../../components/BackButton'

import { 
  Container,
  WrapperMenu,
  Title,
  WrapperInput,
  JobArea,
  TitleInput,
  JobInput
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
          <JobArea>
              <TitleInput>Nome do Endereço</TitleInput>
              <JobInput
                placeholder='TRABALHO'
              />
          </JobArea>
      </WrapperInput>
    </Container>
  )
}
