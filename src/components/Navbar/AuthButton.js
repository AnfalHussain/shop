import React from "react";
import { connect } from "react-redux";
import Logout from "../Logout";

const AuthButton = ({ user }) => {
  let buttons = [];

  if (user) {
    buttons = (
      <>
        <li id="nav-link" key="Logout" className="nav-item">
          <Logout />
        </li>
      </>
    );
  }
  return <ul className="navbar-nav ml-auto">{buttons}</ul>;
};

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

export default connect(mapStateToProps)(AuthButton);
