import { ThemeProvider } from "@material-ui/styles"
import React, { useState } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Path } from "../constants"
import Header from "./ui/Header"
import theme from "./ui/theme"
import Footer from "./ui/Footer"
import LandingPage from "./LandingPage"
import Services from './Services'

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [value, setValue] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path={Path.ROOT}
            render={(props) => (
              <LandingPage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route exact path={Path.SERVICES}
            render={(props) => (
              <Services
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )} />
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
          <Route exact path={Path.WEBSITES} component={() => <div>Websites</div>} />
          <Route
            exact
            path={Path.REVOLUTION}
            component={() => <div>Revolution</div>}
          />
          <Route exact path={Path.ABOUT} component={() => <div>About us</div>} />
          <Route exact path={Path.CONTACT} component={() => <div>Contact us</div>} />
          <Route exact path={Path.ESTIMATE} component={() => <div>Estimate</div>} />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
