import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Components
import AuthButton from "./AuthButton";
import CartBtn from "./CartButton";

//Logo
import icon from "../../assets/logo/lightLogo4.png";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white nav justify-content-between d-flex">
      <div className="container">
        <div>
          <Link className="navbar-brand " to="/">
            <img
              src={icon}
              alt="light in logo"
              style={{ height: "60px", paddingLeft: "20px" }}
            ></img>
          </Link>
        </div>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarText"
        >
          <AuthButton />
          {!user && <CartBtn />}
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

export default connect(mapStateToProps)(NavBar);
