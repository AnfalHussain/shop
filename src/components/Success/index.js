import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Success extends Component {
  render() {
    const orders = this.props.orders;

    return (
      <div className="container mt-5 mb-5">
        <div id="loginCard" className="card col-8 mx-auto mt-5 ">
          <div className="card-body">
            <div className="text-center ">
              <h1 className="mt-5">Purchase was Successful</h1>
            </div>
            <div className="flex justify-content-center">
              <div className="row pt-5">
                <div className="col-4">
                  <strong> Order Status: </strong>
                </div>
                <div className="col-4">
                  <span className="pl-3">{orders[0].status}</span>
                </div>
              </div>

              <div className="row">
                <div className="col-4">
                  <strong> Reference Number: </strong>{" "}
                </div>
                <div className="col-4">
                  <span className="pl-3">{orders[0].order_ref}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <strong> Address: </strong>{" "}
                </div>
                <div className="col-4">
                  <span className="pl-3">
                    {" "}
                    <strong> Area: </strong> {orders[0].address.area}
                  </span>
                  <br />
                  <span className="pl-3">
                    {" "}
                    <strong> Street: </strong> {orders[0].address.street}
                  </span>
                  <br />
                  <span className="pl-3">
                    {" "}
                    <strong> Block: </strong> {orders[0].address.block}
                  </span>
                  <br />
                  <span className="pl-3">
                    {" "}
                    <strong> Optional: </strong> {orders[0].address.optional}
                  </span>
                  <br />
                  <span className="pl-3">
                    {" "}
                    <strong> Phone Number: </strong>{" "}
                    {orders[0].address.phone_number}
                  </span>
                </div>
              </div>

              <div className="row">
                <div className="col-4">
                  <strong> Total: </strong>{" "}
                </div>
                <div className="col-4">
                  <span className="pl-3">{`${orders[0].total} KWD`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.cartReducer.orders,
    products: state.cartReducer.products,
    user: state.authReducer.user,
    profile: state.authReducer.profile,
  };
};

export default connect(mapStateToProps)(Success);
