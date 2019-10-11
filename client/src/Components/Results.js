import React, { Component } from "react";
import { connect } from "react-redux";

class Results extends Component {
  render() {
    return (
      <>
        <section style={{ margin: "16px", textAlign: "center" }}>
          <h1>{`${this.props.whoPaidMore} needs to Venmo ${2} ${3}!`}</h1>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    people: state.toJS().people
  };
};

export default connect(mapStateToProps)(Results);
