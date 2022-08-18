import { createTheme } from "@mui/material";
import { blueGrey, cyan, pink } from "@mui/material/colors";

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main:  pink[500],
            dark:  pink[700],
            light: pink[300],
            contrastText: '#ffffff',
        },
        secondary: {
            main:  cyan[500],
            dark:  cyan[700],
            light: cyan[300],
            contrastText: '#ffffff',
        },
        background: {
            default: blueGrey[300],
            paper:  blueGrey[900],
        },

    }
})