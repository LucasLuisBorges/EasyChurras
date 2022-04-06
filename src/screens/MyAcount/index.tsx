import React from 'react'
import { StatusBar } from 'react-native'
import { BackButton } from '../../components/BackButton'

import StarSvg from '../../assets/star.svg';

import { 
  Container,
  WrapperMenu,
  Title,
  WrapperProfile,
  WrapperHeader,
  Image,
  Name,
  WrapperPoint,
  PointsText,
  WrapperStatus,
  Performed,
  Count,
  SubTitle,
  Feedback,
  WrapperInfo,
  TitleInfo,
  AcountInfoWrapper
} from './styles'
import { MenuSelect } from '../../components/MenuSelect';

export function MyAcount() {
  const image = { uri: 'https://jpimg.com.br/uploads/2022/02/design-sem-nome-2022-02-08t091532.650.jpg' }
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F2F2F2"
        translucent
      />
      <WrapperMenu>
        <BackButton size={41} />

        <Title>Minha Conta</Title>
      </WrapperMenu>

      <WrapperProfile>
        <WrapperHeader>
          <Image
            source={image}
            resizeMode={'cover'}  
          />
          <Name>Maria Rosa</Name>
          <WrapperPoint>
            <StarSvg height={26} width={26}/>
            <PointsText>4,9 pts</PointsText>
          </WrapperPoint>
        </WrapperHeader>

        <WrapperStatus>
          <Performed>
            <Count>20</Count>
            <SubTitle>{`Pedido\nRealizado`}</SubTitle>
          </Performed>

          <Feedback>
            <Count>19</Count>
            <SubTitle>{`Avaliações\nRecebidas`}</SubTitle>
          </Feedback>
        </WrapperStatus>

        <WrapperInfo>
          <TitleInfo>Minha Conta</TitleInfo>

          <AcountInfoWrapper>
            <MenuSelect title='Meus Endereços' iconActive={true}/>
            <MenuSelect title='Forma de pagamento' iconActive={true}/>
            <MenuSelect title='Editar dados' iconActive={true}/>
          </AcountInfoWrapper>
        </WrapperInfo>
      </WrapperProfile>
    </Container>
  )
}
