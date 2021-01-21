import React from "react";
import { Grid, styled, ThemeProvider } from "@material-ui/core";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

import { theme } from "./config/theme";

const AppGrid = styled(Grid)({
  background: "#e8e8e8",
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppGrid container direction="column">
          <Grid item>
            <NavBar />
          </Grid>
          <Grid item>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route path="/blogs">
                <BlogPage />
              </Route>
              <Route path="/contact">
                <ContactPage />
              </Route>
            </Switch>
          </Grid>
        </AppGrid>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
