import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HeroHeader from "./components/HeroHeader";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import BioSection from "./components/BioSection";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
class App extends Component {
  getComponents = (route, index) => (
    <Route
      key={index}
      exact={route.isExact}
      path={route.path}
      render={(props) => <route.component {...props} />}
    />
  );
  render() {
    return (
      <>
        <Navigation />
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <HeroHeader />
        </ThemeProvider>
        {/* // <BioSection {...this.props} /> */}
      </>
    );
  }
}

export default App;
