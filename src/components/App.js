import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Path } from "../constants";
import Header from "./ui/Header";
import theme from "./ui/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={Path.ROOT} component={() => <div>Home</div>} />
          <Route
            exact
            path={Path.SERVICES}
            component={() => <div>Services</div>}
          />
          <Route
            exact
            path={Path.CUSTOM_SOFTWARE}
            component={() => <div>Custom Software</div>}
          />
          <Route
            exact
            path={Path.MOBILE_APPS}
            component={() => <div>Mobile apps</div>}
          />
          <Route
            exact
            path={Path.WEBSITES}
            component={() => <div>Websites</div>}
          />
          <Route
            exact
            path={Path.REVOLUTION}
            component={() => <div>Revolution</div>}
          />
          <Route
            exact
            path={Path.ABOUT}
            component={() => <div>About us</div>}
          />
          <Route
            exact
            path={Path.CONTACT}
            component={() => <div>Contact us</div>}
          />
          <Route
            exact
            path={Path.ESTIMATE}
            component={() => <div>Estimate</div>}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
