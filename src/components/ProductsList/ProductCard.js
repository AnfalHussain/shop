import React, { Component } from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { RiAddCircleFill } from "react-icons/ri";
import { connect } from "react-redux";
import { addItem } from "../../redux/actions";

class ProductCard extends Component {
  state = {
    quantity: 0,
  };
  changeQuantity = (number) => {
    if (this.state.quantity >= 0) {
      if (
        this.props.products.find(
          (product) => product.id === this.props.product.id
        )
      ) {
        let quantityInCart = this.props.products.find(
          (product) => product.id === this.props.product.id
        ).quantity;

        if (
          quantityInCart + number + this.state.quantity >
          this.props.product.stock
        ) {
          return alert("Exceeded stock!");
        } else {
          const newQuantity = this.state.quantity + number;
          this.setState({ quantity: newQuantity });
        }
      } else if (number + this.state.quantity > this.props.product.stock) {
        return alert("Exceeded stock!");
      }
      const newQuantity = this.state.quantity + number;
      this.setState({ quantity: newQuantity });
    }
  };
  ShowCounter = () => {
    if (this.props.product.stock !== 0) {
      return (
        <>
          <button
            onClick={() => this.state.quantity > 0 && this.changeQuantity(-1)}
          >
            -
          </button>
          <input type="text" value={this.state.quantity} />
          <button onClick={() => this.changeQuantity(1)}>+</button>
          <br />

          <div
            className="btn btn_hover add_btn"
            onClick={() => this.state.quantity !== 0 && this.handleClick()}
          >
            <RiAddCircleFill style={{ color: "white" }} size={30} /> Add To Cart
          </div>
        </>
      );
    } else {
      return (
        <div className="  disabled_btn" disabled>
          Out of Stock
        </div>
      );
    }
  };
  handleClick = () => {
    const newItem = {
      id: this.props.product.id,
      name: this.props.product.name,
      price: this.props.product.price,
      quantity: this.state.quantity,
      img: this.props.product.img,
    };
    console.log("quantity", this.state.quantity);
    this.props.addItem(newItem);
    this.setState({ quantity: 0 });
  };
  render() {
    const { product } = this.props;

    return (
      <div className=" row  align-items-center pb-5 workshop_item">
        <div className="col-md-6 col-xs-12 text-center">
          <img src={product.img} alt={product.name} height={300} />
        </div>{" "}
        <div className="col-md-6 col-xs-12">
          <div>
            <h1>{product.name}</h1>
          </div>
          <div>
            <p>{product.description}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>
              {" "}
              <AiFillDollarCircle style={{ color: "#c5198c" }} size={30} />
              <span className="pl-3"></span>
              {product.price} KD
            </p>

            <div>
              <div>{this.ShowCounter()}</div>
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
