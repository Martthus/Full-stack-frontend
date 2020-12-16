import { TextField, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { theme } from '../../styles/stylesMaterialUi'

export function Inputs(props: any) {

    return (
        <ThemeProvider theme={theme}>
            <TextField
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                label={props.label}
                required
                title={props.title}
            />
        </ThemeProvider>
    )
}