import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

//Actions
import { signup, resetErrors } from "../../redux/actions";

class Signup extends Component {
  state = {
    username: "",
    password: "",
  };

  componentWillUnmount() {
    if (this.props.errors.length) this.props.resetErrors();
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();

    this.props.signup(this.state, this.props.history);
  };

  render() {
    if (this.props.user) return <Redirect to="/" />;

    const errors = this.props.errors;
    return (
      <div className="container mt-5">
        <div id="loginCard" className="card col-6 mx-auto  mt-5">
          <div className="card-body">
            <div className="text-center">
              <h4 className="card-title mb-4">Signup</h4>
            </div>
            <form onSubmit={this.submitHandler}>
              {!!errors.length && (
                <div className="alert alert-danger" role="alert">
                  {errors.map((error) => (
                    <p key={error}>{error}</p>
                  ))}
                </div>
              )}

              <div className="form-group">
                <label>Username</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={this.changeHandler}
                />
              </div>
              <div className="form-group">
                <label>Password</label>

                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.changeHandler}
                />
              </div>
              <input
                id="registerbtn"
                className="btn  btn-block add_btn"
                type="submit"
                value="Signup"
              />
            </form>
          </div>
          <div className="card-footer pb-4">
            <div className="card-title pt-2 pb-2 text-center">
              <span>Have an account?</span>
            </div>
            <div>
              <a href="/login" className="btn  btn-block signup_btn">
                Login
              </a>
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.errors.errors,
    user: state.authReducer.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signup: (userData, history) => dispatch(signup(userData, history)),
    resetErrors: () => dispatch(resetErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
