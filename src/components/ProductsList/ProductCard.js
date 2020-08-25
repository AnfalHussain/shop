import React, { Component } from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { RiAddCircleFill } from "react-icons/ri";
import { connect } from "react-redux";
import { addItem } from "../../redux/actions";

class ProductCard extends Component {
  render() {
    const { id, name, description, image, price, addItem } = this.props;
    const handleClick = () => {
      const newItem = {
        id: id,
        name: name,
        price: price,
      };
      addItem(newItem);
    };
    return (
      <div className=" row  align-items-center pb-5 workshop_item">
        <div className="col-md-6 col-xs-12 text-center">
          <img src={image} alt="workshop" height={300} />
        </div>{" "}
        <div className="col-md-6 col-xs-12">
          <div>
            <h1>{name}</h1>
          </div>
          <div>
            <p>{description}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>
              {" "}
              <AiFillDollarCircle style={{ color: "#c5198c" }} size={30} />
              <span className="pl-3"></span>
              {price} KD
            </p>

            <div>
              <div className="btn btn_hover add_btn" onClick={handleClick}>
                <RiAddCircleFill style={{ color: "white" }} size={30} /> Add To
                Cart
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
    addItem: (item) => dispatch(addItem(item)),
  };
};
export default connect(null, mapDispatchToProps)(ProductCard);
