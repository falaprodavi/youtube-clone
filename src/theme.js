import { createMuiTheme } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    background: {
      default: colors.common.white,
      dark: "#1c2025",
      paper: "#282C34",
    },

    primary: {
      main: "#f44436",
    },
    secondary: {
      main: "#3EA6FF",
    },

    text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600],
    }

  },
});

export default theme;
