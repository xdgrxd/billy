import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#33CC33",
      dark: "#2E9E2E",
      light: "#83E183",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#003333",
      dark: "#17305E",
      light: "#668ACC",
      contrastText: "#FFF",
    },
    background: {
      paper: "#FFF",
      default: "#F7F6F3",
    },
  },
});
