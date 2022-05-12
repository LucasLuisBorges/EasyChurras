import React from "react";

import * as S from './styles';

interface IProps {
    title: string;
    placeholder: string;
    inNumeric: boolean;
}

export function InputSmall({ title, placeholder, inNumeric } : IProps) {
    return (
        <S.Container >
            <S.TitleInput>
                {title}
            </S.TitleInput>
            <S.JobInput
                placeholder={placeholder}
                keyboardType ={inNumeric ? 'numeric' : 'default'}
            />
        </S.Container>
    )
}