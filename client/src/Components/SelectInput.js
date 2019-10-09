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
      <div style={{ margin: 50 }}>
        <Select
          id="choose-sel"
          value={this.props.paidBy}
          onChange={this.editSelects}
        >
          <option value="basic">Basic</option>
          <option value="material">Material</option>
          <option value="underbar">Underbar</option>
        </Select>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    paidBy: state.toJS().bills[ownProps.bill].paidBy
  };
};

export default connect(mapStateToProps)(SelectInput);
