import { createTheme } from "@mui/material";
import { cyan, grey, pink} from "@mui/material/colors";

export const LightTheme = createTheme({
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
            default: grey[300],
            paper:  '#ffffff',
        },

    }
})