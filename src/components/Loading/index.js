import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ type, color }) => (
  <div className="d-flex mx-auto">
    <img
      alt="loading"
      src={require("../../assets/img/Curve-Loading.gif")}
    ></img>
    Loading
  </div>
);

export default Loading;
