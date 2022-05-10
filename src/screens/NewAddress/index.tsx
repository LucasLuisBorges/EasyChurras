import React from 'react'
import { StatusBar } from 'react-native'
import { BackButton } from '../../components/BackButton'
import { InputFull } from '../../components/InputFull'
import { InputMedium } from '../../components/InputMedium'
import { InputSmall } from '../../components/InputSmall'

import * as S from './styles'

export function NewAddress() {
  return (
    <S.Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
        translucent
      />
      <S.WrapperMenu>
        <BackButton size={41} />

        <S.Title>
          Novo Endereço
        </S.Title>
      </S.WrapperMenu>

      <S.WrapperInput>
        <InputFull
          title='Nome do endereço'
          placeholder='TRABALHO'
        />
        <S.JobArea>
          <InputMedium
            title='Cep'
            placeholder='00000-000'
          />

          <InputSmall
            title='Número'
            placeholder='0000'
            inNumeric={true}
          />
        </S.JobArea>

        <InputFull
          title='Nome da rua'
          placeholder='Nome da rua'
        />

        <S.JobArea>
          <InputMedium
            title='Cidade'
            placeholder='Nome da cidade'
          />

          <InputSmall
            title='Estado'
            placeholder='SC'
            inNumeric={false}
          />
        </S.JobArea>
      </S.WrapperInput>
    </S.Container>
  )
}
