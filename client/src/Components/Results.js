import React, { Component } from "react";
import { connect } from "react-redux";

class Results extends Component {
  whoPaidMore =
    this.props.state.people.katherine.amountPaid >
    this.props.state.people.conner.amountPaid
      ? "Katherine"
      : "Conner";
  whoPaidLess = this.whoPaidMore === "Katherine" ? "Conner" : "Katherine";
  split = this.props.state.total / 2;

  dollarify = price =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumSignificantDigits: 3
    }).format(price);
  venmoAmount = () => {
    if (this.whoPaidMore === "Katherine") {
      return this.split - this.props.state.people.conner.amountPaid;
    } else {
      return this.split - this.props.state.people.katherine.amountPaid;
    }
  };
  render() {
    return (
      <>
        <section style={{ margin: "16px", textAlign: "center" }}>
          <h1>{`${this.whoPaidLess} needs to Venmo ${
            this.whoPaidMore
          } ${this.dollarify(this.venmoAmount())}!`}</h1>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state.toJS()
  };
};

export default connect(mapStateToProps)(Results);
