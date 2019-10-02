import React, { Component } from "react";
import AmountInput from "./AmountInput";
import { Button, List, ListItem, Page, ListHeader } from "react-onsenui";

class Form extends Component {
  renderRow = (row, index) => {
    return <ListItem key={index}>{row}</ListItem>;
  };

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <List
          dataSource={[
            <AmountInput bill="rent" />,
            <AmountInput bill="electric" />,
            3,
            4,
            5
          ]}
          renderRow={this.renderRow}
          renderHeader={() => <ListHeader>Bills</ListHeader>}
        />
        <section style={{ margin: "16px", textAlign: "center" }}>
          <Button
            onClick={this.props.pushPage.bind(this, this.props.navigator)}
          >
            Submit
          </Button>
        </section>
      </Page>
    );
  }
}

export default Form;
