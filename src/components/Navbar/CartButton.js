import React, { Component } from "react";
import { connect } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";

class CartButton extends Component {
  render() {
    const products = this.props.products;
    console.log("CartButton products", products);
    return (
      <li>
        <Link to="/cart">
          <NotificationBadge
            count={products.length}
            effect={Effect.SCALE}
            frameLength={15.0}
            style={{
              marginLeft: 200,
              backgroundColor: "#c5198c",
              fontSize: 14,
            }}
          />
          <FaShoppingCart style={{ color: "#2e1753" }} size={30} />
        </Link>
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.cartReducer.products,
  };
};

export default connect(mapStateToProps)(CartButton);
