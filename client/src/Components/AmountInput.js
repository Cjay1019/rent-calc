import React, { Component } from "react";
import { Input } from "react-onsenui";
import { connect } from "react-redux";

class AmountInput extends Component {
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.props.dispatch({ type: "USER_INPUT", payload: { [name]: value } });
  };

  render() {
    return (
      <section style={{ textAlign: "center" }}>
        <p>
          <Input
            value={this.props[this.props.bill]}
            name={this.props.bill}
            onChange={this.handleInputChange}
            type="number"
            modifier="underbar"
            float
            placeholder="Amount"
          />
        </p>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    [ownProps.bill]: state.toJS().bills[ownProps.bill].amount
  };
};

export default connect(mapStateToProps)(AmountInput);
