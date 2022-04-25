import React from "react";
import { TitleButtonSelected } from "../TitleButtonSelected";

import {
    HeaderWrapper,
    TitleWrapper
} from './styled'

interface IProps {
    title: string;
}

export function HeaderComp({ title }: IProps) {
    const image = {
        uri: 'https://www.lopessupermercados.com.br/portalrevista/wp-content/uploads/2019/11/shutterstock_413328976-600x380.jpg'
    }
    return (
            <HeaderWrapper source={image}>
                <TitleWrapper>
                    <TitleButtonSelected title={title} />
                </TitleWrapper>
            </HeaderWrapper>
    )
}