import React from "react";
import { TitleButtonSelected } from "../../../../components/TitleButtonSelected";

import * as S from './styled'

interface IProps {
    title: string;
}

export function HeaderComp({ title }: IProps) {
    const image = {
        uri: 'https://www.lopessupermercados.com.br/portalrevista/wp-content/uploads/2019/11/shutterstock_413328976-600x380.jpg'
    }
    return (
            <S.HeaderWrapper 
                source={image}
            >
                <S.TitleWrapper>
                    <TitleButtonSelected 
                        title={title}
                    />
                </S.TitleWrapper>
            </S.HeaderWrapper>
    )
}