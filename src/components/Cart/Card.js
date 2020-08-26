import React, { Component } from "react";
import { FaTrash } from "react-icons/fa";

import { connect } from "react-redux";
// import { Link, Redirect } from "react-router-dom";
import { removeItem } from "../../redux/actions";

class Card extends Component {
  handleClick = () => {
    this.props.removeItem(this.props.orderItem);
  };
  render() {
    return (
      <div className="row pt-3 pb-3">
        <div className="col-3">{this.props.orderItem.name}</div>
        <div className="col-3">{this.props.orderItem.quantity}</div>
        <div className="col-3">
          {this.props.orderItem.price * this.props.orderItem.quantity} KWD{" "}
        </div>
        <div className="col-3">
          <div className="d-flex justify-content-end">
            <FaTrash onClick={() => this.handleClick()} size={20} />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (item) => dispatch(removeItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Card);
