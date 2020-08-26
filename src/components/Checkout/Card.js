import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="row pt-3 pb-3">
        <div className="col-3">{this.props.orderItem.name}</div>
        <div className="col-3">{this.props.orderItem.quantity}</div>
        <div className="col-3">
          {this.props.orderItem.price * this.props.orderItem.quantity} KWD{" "}
        </div>
      </div>
    );
  }
}

export default Card;
