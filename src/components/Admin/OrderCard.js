import React, { Component } from "react";
import { connect } from "react-redux";
import statusOptions from "./SelectOptions/status";
import Select from "react-select";
import customStyles from "./SelectStyle/customStyles";

//Actions
import { editOrder, setNewOrders } from "../../redux/actions";

class OrderCard extends Component {
  render() {
    const { item, editOrder, setNewOrders } = this.props;

    const setStatus = async (option) => {
      console.log("setStatus called");
      const orderObj = {
        status: option.value,
      };
      await editOrder(orderObj, item.id);
      setNewOrders();
    };
    //status, address, baskets,total, order_ref
    return (
      <div>
        <div className="row pt-3 pb-3  m-4">
          <div className="col-3">{item.order_ref}</div>
          <div className="col-3">{item.total}</div>

          <div className="col-4">
            <div>
              <Select
                styles={customStyles}
                value={statusOptions.find(
                  (option) => option.value === item.status
                )}
                placeholder={item.status}
                options={statusOptions}
                onChange={(option) => setStatus(option)}
                components={{
                  IndicatorSeparator: () => null,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    editOrder: (order, orderId) => dispatch(editOrder(order, orderId)),
    setNewOrders: () => dispatch(setNewOrders()),
  };
};
export default connect(null, mapDispatchToProps)(OrderCard);
