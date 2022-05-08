import React from "react";

import {
    Container,
    TitleInput,
    JobInput
} from './styles';

interface IProps {
    title: string;
    placeholder: string;
    inNumeric: boolean;
}

export function InputSmall({ title, placeholder, inNumeric } : IProps) {
    return (
        <Container >
            <TitleInput>{title}</TitleInput>
            <JobInput
                placeholder={placeholder}
                keyboardType ={inNumeric ? 'numeric' : 'default'}
            />
        </Container>
    )
}