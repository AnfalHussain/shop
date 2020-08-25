import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Loading from "../Loading";

import { connect } from "react-redux";
class Profile extends Component {
  render() {
    const user = this.props.user;
    const profile = this.props.profile;
    const loading = this.props.profileLoading;
    if (!user) return <Redirect to="/" />;

    if (user) {
      if (loading) return <Loading />;

      return (
        <div className="container pt-5 mt-5">
          <div id="loginCard" className="card col-6 mx-auto  mt-5">
            <div className="card-body mt-5">
              <div className="text-center">
                <h4 className="card-title mb-4 text-dark">Your Profile</h4>
              </div>
              <p> Username: {profile.user.username}</p>
              <p> First Name: {profile.first_name} </p>
              <p> Middle Name: {profile.middle_name} </p>
              <p> Last Name: {profile.last_name} </p>
              <p> Email: {profile.user.email} </p>
              <p> Age: {profile.age} </p>
              <p> Gender: {profile.gender} </p>
              <p> Nationality: {profile.nationality} </p>
              <p> Civil ID Number: {profile.civil_id_number} </p>
              <p> Phone Number: {profile.mobile_number} </p>
              <p>Secondary Phone Number: {profile.secondary_contact_number}</p>
              <p> Governorate: {profile.governorate} </p>
              <p> Area: {profile.area} </p>
              <p> Education Level: {profile.education_level} </p>
              <p> Major: {profile.major} </p>
            </div>
          </div>

          <div className=" row justify-content-center  mt-3 mb-5">
            <br />
            <Link to="/edit-profile">
              <button className="btn rounded-pill btn-outline-secondary">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  profile: state.authReducer.profile,
  profileLoading: state.authReducer.profileLoading,
});

export default connect(mapStateToProps)(Profile);
