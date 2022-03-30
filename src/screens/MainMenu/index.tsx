import React from "react";
import { BackButton } from "../../components/BackButton";
import ChurrasSvg from '../../assets/churrasqueiro.svg'

import { 
    Container,
    ProfileWrapper,
    Profile,
    Name
 } from './styles';
 import { MenuSelect } from "../../components/MenuSelect";

export function MainMenu() {
    return(
        <Container>
            <ProfileWrapper>
                <BackButton />

                <Profile>
                    <ChurrasSvg 
                        height={72} 
                        width={72} 
                    />            
                </Profile>

                <Name>Maria Rosa</Name>
            </ProfileWrapper>
            
            <MenuSelect
                title="Minha Conta"
            />
        </Container>
    )
}