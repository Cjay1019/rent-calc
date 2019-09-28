import React, { Component } from "react";
import { BackButton, Toolbar, Page, Button, Navigator } from "react-onsenui";
import Form from "./Components/Form";
var index = 1;

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

  handleClick = navigator => navigator.popPage();

  pushPage = navigator => {
    navigator.pushPage({
      title: `Another page ${index}`,
      hasBackButton: true
    });
    index++;
  };

  renderPage = (route, navigator) => {
    return (
      <Page
        key={route.title}
        renderToolbar={this.renderToolbar.bind(this, route, navigator)}
      >
        <section style={{ margin: "16px", textAlign: "center" }}>
          <Button onClick={this.pushPage.bind(this, navigator)}>
            Push Page
          </Button>
        </section>
      </Page>
    );
  };

  render = () => {
    return (
      <Navigator
        swipeable
        renderPage={this.renderPage}
        initialRoute={{
          title: "First page",
          hasBackButton: false
        }}
      />
    );
  };
}

export default App;
