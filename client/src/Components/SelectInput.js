import React, { Component } from "react";
import { Select } from "react-onsenui";
import { connect } from "react-redux";

class SelectInput extends Component {
  editSelects = event => {
    const value = event.target.value;
    this.props.dispatch({
      type: "USER_SELECT",
      payload: { [this.props.bill]: value }
    });
  };

  render() {
    return (
      <>
        Who paid this bill?&nbsp;&nbsp;
        <Select
          modifier="underbar"
          value={this.props.paidBy || "Select Person"}
          label="this"
          onChange={this.editSelects}
        >
          <option value="Filler">Filler</option>
          <option value="Select Person">Select Person</option>
          <option value="Katherine">Katherine</option>
          <option value="Conner">Conner</option>
        </Select>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    paidBy: state.toJS().bills[ownProps.bill].paidBy
  };
};

export default connect(mapStateToProps)(SelectInput);
