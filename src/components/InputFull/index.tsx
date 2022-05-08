import React from "react";

import {
    Container,
    TitleInput,
    JobInput
} from './styles';

interface IProps {
    title: string;
    placeholder: string;
}

export function InputFull({ title, placeholder } : IProps) {
    return (
        <Container>
            <TitleInput>{title}</TitleInput>
            <JobInput
                placeholder={placeholder}
            />
        </Container>
    )
}