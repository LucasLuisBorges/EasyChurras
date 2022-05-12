import React from "react";

import * as S from './styles';

interface IProps {
    title: string;
    placeholder: string;
}

export function InputFull({ title, placeholder } : IProps) {
    return (
        <S.Container>
            <S.TitleInput>
                {title}
            </S.TitleInput>
            <S.JobInput
                placeholder={placeholder}
            />
        </S.Container>
    )
}