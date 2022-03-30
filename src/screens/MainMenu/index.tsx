import React from "react";
import { ScrollView } from "react-native";
import ChurrasSvg from '../../assets/churrasqueiro.svg';

import { 
    Container,
    ProfileWrapper,
    Profile,
    Name,
    Button
} from './styles';
import { MenuSelect } from "../../components/MenuSelect";
import { BackButton } from "../../components/BackButton";
import { ActionButton } from "../../components/ActionButton"; 
import { useTheme } from "styled-components";

export function MainMenu() {
    const theme = useTheme()

    return(
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                    <ProfileWrapper>
                        <BackButton />

                        <Profile>
                            <ChurrasSvg height={72} width={72}/>
                        </Profile>

                        <Name>Maria Rosa</Name>
                    </ProfileWrapper>
                    
                    <MenuSelect
                        iconActive={true}
                        iconName='user'
                        title="Minha Conta"
                    />
                    <MenuSelect
                        iconActive={true}
                        iconName='bookmark'
                        title="Favoritos"
                    />
                    <MenuSelect
                        iconActive={true}
                        iconName='message-circle'
                        title="Conversas"
                    />
                    <MenuSelect
                        iconActive={true}
                        iconName='bell'
                        title="Notificações"
                    />
                    <MenuSelect
                        iconActive={true}
                        iconName='settings'
                        title="Configurações"
                    />
                    <MenuSelect
                        iconActive={false}
                        title="FAC e Feedbacks"
                    />
                    <MenuSelect
                        iconActive={false}
                        title="Central de ajuda"
                    />
                    <MenuSelect
                        iconActive={false}
                        title="Sobre o EasyChurras"
                    />
                    <MenuSelect
                        iconActive={false}
                        title="Termos de uso"
                    />
                    <MenuSelect
                        iconActive={false}
                        title="Privacidade"
                    />
                    <MenuSelect
                        iconActive={false}
                        title="Avalie na App Store"
                    />
                    <MenuSelect
                        iconActive={false}
                        title="Siga nossas redes sociais"
                    />

                    <Button>
                        <ActionButton
                            color={theme.colors.main}
                            title="Sair"
                        />
                    </Button>
            </ScrollView>

        </Container>
    )
}