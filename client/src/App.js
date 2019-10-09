import React, { Component } from "react";
import { BackButton, Toolbar, Page, Navigator } from "react-onsenui";
import Form from "./Components/Form";
import Results from "./Components/Results";

class App extends Component {
  renderToolbar = (route, navigator) => {
    const backButton = route.hasBackButton ? (
      <BackButton onClick={this.handleClick.bind(this, navigator)}>
        Back
      </BackButton>
    ) : null;

    return (
      <Toolbar>
        <div className="left">{backButton}</div>
        <div className="center">{route.title}</div>
      </Toolbar>
    );
  };

  handleClick = navigator => {
    navigator.popPage();
  };

  pushPage = navigator => {
    navigator.pushPage({
      title: "Results ",
      hasBackButton: true,
      component: Results
    });
  };

  renderPage = (route, navigator) => {
    const props = route.props || {};
    props.navigator = navigator;
    props.pushPage = this.pushPage;
    return (
      <Page
        key={route.title}
        renderToolbar={this.renderToolbar.bind(this, route, navigator)}
      >
        {React.createElement(route.component, props)}
      </Page>
    );
  };

  render() {
    return (
      <Navigator
        swipeable
        renderPage={this.renderPage}
        initialRoute={{
          title: "Bills",
          hasBackButton: false,
          component: Form
        }}
      />
    );
  }
}

export default App;
