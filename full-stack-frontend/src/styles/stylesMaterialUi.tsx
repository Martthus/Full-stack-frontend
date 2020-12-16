import {
    createMuiTheme,
    withStyles,
    Theme
} from '@material-ui/core/styles';
import { purple, red } from '@material-ui/core/colors';
import { Button, Card } from '@material-ui/core'


export const theme = createMuiTheme({
    palette: {
        primary: red,
        secondary: purple
    },
});

export const ColorButton = withStyles((theme: Theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[900]),
        backgroundColor: purple[900],
        width: "150px",
        marginTop: "10px",
        '&:hover': {
            backgroundColor: purple[700],
        },
    },
}))(Button);

export const CardStyle = withStyles((theme: Theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[900]),
        backgroundColor: purple[900],
        width: "150px",
        padding: "10px 20px",
        marginTop: "10px",
        transition: "all 1s linear",
        '&:hover': {
            backgroundColor: red[900],
            cursor: "pointer"
        },
    },
}))(Card);