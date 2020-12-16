import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ColorButton, theme } from '../../styles/stylesMaterialUi'

export function Buttons(props: any) {

    return (
        <ThemeProvider theme={theme}>
            <ColorButton type={props.type}>{props.buttonText}</ColorButton>
        </ThemeProvider>
    )
}