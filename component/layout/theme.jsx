import { createTheme } from '@mui/material/styles';
import { red, green, blue, common, grey } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  // direction: dir,
  typography: {
    fontSize: 15
  },
  palette: {
    primary: {
      main: blue.A400
    },
    secondary: {
      main: green.A400
    },
    info: {
      main: grey[800]

    },
    colors: {
      main: grey[500]
    },
    default: {
      main: blue.A400
    },
    error: {
      main: red.A400
    },
    background: {
      default: common.white
    },
    light: common.white,

  },
  overrides: {
    MuiFormControl: {
      root: {
        marginTop: "0.5rem",
        marginBottom: "0.5rem"
      }
    },
    MuiDialog: {
      root: {
        alignItems: "flex-end"
      },
      container: {
        margin: 0,
        maxWidth: "100%",
        width: "100%"
      }
    }
  }
});

export default theme;
