import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ThemeProvider } from "@mui/material";
import { LightTheme } from "./shared/themes";

import { Header } from "./shared/components";

export const App = () => {
  return (
    <>
      <ThemeProvider theme={LightTheme}>
        <Router>
          <Header/>
          <AppRoutes />
        </Router>
      </ThemeProvider>
    </>
  );
};
