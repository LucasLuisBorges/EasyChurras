import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StatusBar } from 'react-native'
import { ActionButton } from '../../components/ActionButton'
import { BackButton } from '../../components/BackButton'
import theme from '../../styles/theme'
import { InputFull } from './content/InputFull'
import { InputMedium } from './content/InputMedium'
import { InputSmall } from './content/InputSmall'

import * as S from './styles'

export function NewAddress() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }
  
  return (
    <S.Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
        translucent
      />
      <S.WrapperMenu>
        <BackButton size={41} onPress={handleBack}/>

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

        <S.SetPrimary>
          <S.TextTitle>
            Endereço principal
          </S.TextTitle>

          <S.Button />
        </S.SetPrimary>
      </S.WrapperInput>
      
      <S.WrapperButton>
        <ActionButton
          colorBorder={theme.colors.textOpacity}
          colorText={theme.colors.text}
          title='pular'
          color={theme.colors.background_secondary}
        />
        
        <ActionButton
          colorBorder={theme.colors.success_light}
          colorText={theme.colors.text_light}
          title='enviar'
          color={theme.colors.success_light}
        />
      </S.WrapperButton>
    </S.Container>
  )
}
