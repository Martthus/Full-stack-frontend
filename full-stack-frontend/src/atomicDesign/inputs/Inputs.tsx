import { TextField } from '@material-ui/core'
import React from 'react'
import {
    createStyles,
    fade,
    Theme,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
} from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

export function Inputs(props: any) {

    const theme = createMuiTheme({
        palette: {
            primary: purple,
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <TextField
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                label={props.label}
                required={props.required}
            />
        </ThemeProvider>
    )
}