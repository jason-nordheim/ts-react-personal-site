import React from "react";
import { Grid, ThemeProvider } from "@material-ui/core";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

import { theme } from "./config/theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Grid container direction="column">
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
        </Grid>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
