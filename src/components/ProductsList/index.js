import React from "react";
import { connect } from "react-redux";

//Components
import Header from "./Header";
import ProductCard from "./ProductCard";

const ProductsList = ({ products }) => {
  const productsCards = products.map((product, index) => (
    <ProductCard
      key={`${index}`}
      id={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
      image={product.img}
    />
  ));
  return (
    <div>
      <Header />

      {products ? (
        <div className="container">{productsCards}</div>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
};

const mapStateToProps = ({ products }) => ({
  products: products.products,
});

export default connect(mapStateToProps)(ProductsList);
