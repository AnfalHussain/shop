import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

//Components
import Header from "./Header";
import ProductCard from "./ProductCard";

const ProductsList = ({ products, user }) => {
  if (user) return <Redirect to="/admin" />;

  const productsCards = products.map((product) => (
    <ProductCard key={`${product.id}`} product={product} products={products} />
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

const mapStateToProps = ({ products, authReducer }) => ({
  products: products.products,
  user: authReducer.user,
});

export default connect(mapStateToProps)(ProductsList);
