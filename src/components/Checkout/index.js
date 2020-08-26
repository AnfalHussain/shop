import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { checkout } from "../../redux/actions";
import Card from "./Card";

//Actions
import { resetErrors, setProducts } from "../../redux/actions";
class Checkout extends Component {
  state = {
    area: "",
    street: "",
    block: "",
    optional: "",

    total: 0,
  };
  componentWillUnmount() {
    if (this.props.errors.length) this.props.resetErrors();
  }
  totalPrice = () => {
    let total = 0;
    this.props.products.forEach((item) => {
      total = total + parseFloat(item.price) * parseFloat(item.quantity);
    });
    return total.toFixed(3);
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // submitHandler = () => {
  //   newOrders = {
  //     baskets: this.props.products,
  //     address: {
  //       area: this.state.area,
  //       street: this.state.street,
  //       block: this.state.block,
  //       optional: this.state.optional,
  //     },
  //   };
  //   return newOrders;
  // };

  handleClick = async (e) => {
    e.preventDefault();

    const newOrders = {
      baskets: this.props.products,
      address: {
        area: this.state.area,
        street: this.state.street,
        block: this.state.block,
        optional: this.state.optional,
      },
    };
    console.log("newOrders", newOrders);

    await this.props.checkout(newOrders, this.props.history);
    this.props.setProducts();
  };

  render() {
    const errors = this.props.errors;

    const getOrderItem = this.props.products.map((item) => (
      <Card key={item.name} orderItem={item} />
    ));

    return (
      <div className="container mt-5 mb-5">
        <div id="loginCard" className="card col-8 mx-auto mt-5 ">
          <div className="card-body">
            <div className="text-center">
              <h1 className="mt-5">Summary</h1>
            </div>
            <div className="container-fluid mb-4 mt-4 pl-4 pr-4  ">
              <div className="row m-4">
                <div className="col-3">
                  <strong>Item</strong>
                </div>
                <div className="col-3">
                  {" "}
                  <strong>Quantity</strong>
                </div>
                <div className="col-3">
                  {" "}
                  <strong>Price</strong>
                </div>
                <div className="col-12">
                  <div className="table-responsive">
                    {getOrderItem}

                    <div
                      className="row d-flex pt-4"
                      style={{ color: "#2e1753" }}
                    >
                      <div className="col-4">
                        <strong>Total</strong>
                      </div>
                      <div className="col-4">
                        <strong>{this.totalPrice()} KWD</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <form onSubmit={this.handleClick}>
                    {!!errors.length && (
                      <div className="alert alert-danger" role="alert">
                        {errors.map((error) => (
                          <p key={error}>{error}</p>
                        ))}
                      </div>
                    )}
                    <div className="text-center">
                      <h2 className="mt-5">Address</h2>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Area"
                        name="area"
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Street"
                        name="street"
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Block"
                        name="block"
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="optional"
                        name="optional"
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label>E.g. +96599991234 </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Phone number"
                        name="phone_number"
                        onChange={this.changeHandler}
                      />
                    </div>

                    <input
                      id="registerbtn"
                      className="btn  btn-block add_btn"
                      type="submit"
                      value="Checkout"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    checkout: (products, history) => dispatch(checkout(products, history)),
    setProducts: () => dispatch(setProducts()),
    resetErrors: () => dispatch(resetErrors()),
  };
};

const mapStateToProps = (state) => {
  return {
    orders: state.cartReducer.orders,
    products: state.cartReducer.products,
    errors: state.errors.errors,
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Checkout)
);
