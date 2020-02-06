import {createMuiTheme, responsiveFontSizes} from "@material-ui/core/styles";

let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#333333',
            contrastText: '#fff',
        },
        secondary: {
            main: '#1EB980',
            contrastText: '#fff',
        },
    },
});
theme = responsiveFontSizes(theme);

export default theme;