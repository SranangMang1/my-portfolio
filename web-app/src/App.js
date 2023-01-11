import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation";
// import HeroHeader from "./components/HeroHeader";
// import BioSection from "./components/BioSection";

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
        <Navigation {...this.props}>
          {/* <HeroHeader {...this.props} /> */}
        </Navigation>
        {/* // <BioSection {...this.props} /> */}
      </>
    );
  }
}

export default App;
