import React, { Component } from "react";
import AmountInput from "./AmountInput";
import SelectInput from "./SelectInput";
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
            <SelectInput bill="rent"></SelectInput>
          ]}
          renderRow={this.renderRow}
          renderHeader={() => <ListHeader>Rent</ListHeader>}
        />
        <List
          dataSource={[
            <AmountInput bill="electric" />,
            <SelectInput bill="electric"></SelectInput>
          ]}
          renderRow={this.renderRow}
          renderHeader={() => <ListHeader>Electric</ListHeader>}
        />
        <List
          dataSource={[
            <AmountInput bill="insurance" />,
            <SelectInput bill="insurance"></SelectInput>
          ]}
          renderRow={this.renderRow}
          renderHeader={() => <ListHeader>Insurance</ListHeader>}
        />
        <List
          dataSource={[
            <AmountInput bill="phones" />,
            <SelectInput bill="phones"></SelectInput>
          ]}
          renderRow={this.renderRow}
          renderHeader={() => <ListHeader>Phones</ListHeader>}
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
