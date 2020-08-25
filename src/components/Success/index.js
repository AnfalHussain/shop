import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Success extends Component {
  render() {
    if (!this.props.user) return <Redirect to="/login" />;

    const orders = this.props.orders;

    return (
      <div className="container mt-5 mb-5">
        <div id="loginCard" className="card col-8 mx-auto mt-5 ">
          <div className="card-body">
            <div className="text-center ">
              <h1 className="mt-5">Registration was Successful</h1>
            </div>
            <div className="flex justify-content-center">
              <div className="row pt-5">
                <div className="col-4">
                  <strong> Payment Status: </strong>
                </div>
                <div className="col-4">
                  <span className="pl-3">{orders[0].payment_status}</span>
                </div>
              </div>

              <div className="row">
                <div className="col-4">
                  <strong> Reference Number: </strong>{" "}
                </div>
                <div className="col-4">
                  <span className="pl-3">{orders[0].reference_number}</span>
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
