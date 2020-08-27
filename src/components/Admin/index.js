import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

//components
import OrderCard from "./OrderCard";
class Admin extends Component {
  render() {
    if (!this.props.user) return <Redirect to="/" />;

    const newOrders = this.props.newOrders;
    const ordersList = newOrders.map((item) => (
      <OrderCard key={item.id} item={item} />
    ));

    return (
      <div>
        {ordersList.length ? (
          <>
            {" "}
            <div className="text-center">
              <h1>Pending Orders</h1>
            </div>
            <div className="row m-4">
              <div className="col-3">
                <strong>Order Reference </strong>
              </div>
              <div className="col-3">
                {" "}
                <strong>Total</strong>
              </div>
              <div className="col-3">
                {" "}
                <strong>Status</strong>
              </div>
            </div>
            <div className=""> {ordersList}</div>{" "}
          </>
        ) : (
          <div className="text-center">
            <h1>No Pending Orders</h1>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newOrders: state.adminReducer.newOrders,
    user: state.authReducer.user,
  };
};

export default connect(mapStateToProps)(Admin);
