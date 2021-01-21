import React from "react";
import { Grid, styled, ThemeProvider } from "@material-ui/core";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import { theme } from "./config/theme";
import { AppRoutes } from "./config/AppRoutes";

const AppGrid = styled(Grid)({
  borderRadius: "5px",
  background: "#e8e8e8",
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppGrid container direction="column" xs={12}>
          <Grid item>
            <NavBar />
          </Grid>
          <Grid item>
            <Switch>
              {AppRoutes.map((r) => {
                return (
                  <Route
                    key={`${r.path}`}
                    path={r.path}
                    exact={r.exact}
                    component={r.component}
                  ></Route>
                );
              })}
            </Switch>
          </Grid>
        </AppGrid>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
