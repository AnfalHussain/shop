import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="row pt-3 pb-3">
        <div className="col-4">{this.props.orderItem.name}</div>
        <div className="col-4">{this.props.orderItem.price} KWD</div>
      </div>
    );
  }
}

export default Card;
