import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Loading from "../Loading";
import Select from "react-select";
import customStyles from "./SelectStyle/customStyles";
import governorateOptions from "./SelectOptions/governorate";
import genderOptions from "./SelectOptions/gender";
import educationOptions from "./SelectOptions/education";

//Actions
import { editProfile, resetErrors } from "../../redux/actions";

import { connect } from "react-redux";
class EditProfile extends Component {
  state = {
    first_name: "",
    middle_name: "",
    last_name: "",
    gender: "",
    nationality: "",
    mobile_number: "",
    secondary_contact_number: "",
    civil_id_number: "",
    governorate: "",
    area: "",
    education_level: "",
    major: "",
    age: "",
  };

  componentDidMount() {
    if (this.props.user) {
      const profile = this.props.profile;
      this.setState({
        first_name: profile.first_name,
        middle_name: profile.middle_name,
        last_name: profile.last_name,
        gender: profile.gender,
        nationality: profile.nationality,
        mobile_number: profile.mobile_number,
        secondary_contact_number: profile.secondary_contact_number,
        civil_id_number: profile.civil_id_number,
        governorate: profile.governorate,
        area: profile.area,
        education_level: profile.education_level,
        major: profile.major,
        age: profile.age,
      });
    }
  }
  componentWillUnmount() {
    if (this.props.errors.length) this.props.resetErrors();
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();

    this.props.editProfile(this.state, this.props.history);
  };

  render() {
    const setGovernorate = (option) => {
      this.setState({
        governorate: option.value,
      });
    };
    const setGender = (option) => {
      this.setState({
        gender: option.value,
      });
    };
    const setEducation = (option) => {
      this.setState({
        education_level: option.value,
      });
    };

    const user = this.props.user;
    const profile = this.props.profile;
    const loading = this.props.profileLoading;
    const errors = this.props.errors;

    if (!user) return <Redirect to="/" />;

    if (user) {
      if (loading) return <Loading />;

      return (
        <div className="container pt-5 mt-5">
          <div id="loginCard" className="card col-6 mx-auto  mt-5">
            <div className="card-body mt-5">
              <div className="text-center">
                <h4 className="card-title mb-4 text-dark">Your Edit Profile</h4>
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
                  <label>First Name</label>

                  <input
                    className="form-control"
                    type="text"
                    placeholder={profile.first_name}
                    name="first_name"
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Middle Name</label>

                  <input
                    className="form-control"
                    type="text"
                    placeholder={profile.middle_name}
                    name="middle_name"
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>

                  <input
                    className="form-control"
                    type="text"
                    placeholder={profile.last_name}
                    name="last_name"
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>

                  <input
                    className="form-control"
                    type="text"
                    placeholder={profile.email}
                    name="email"
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Age</label>

                  <input
                    className="form-control"
                    type="text"
                    placeholder={profile.age}
                    name="age"
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Gender</label>
                  <Select
                    styles={customStyles}
                    value={genderOptions.find(
                      (option) => option.value === this.state.gender
                    )}
                    placeholder={
                      this.state.gender ? this.state.gender : "Choose Gender"
                    }
                    options={genderOptions}
                    onChange={(option) => setGender(option)}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Nationality</label>

                  <input
                    className="form-control"
                    type="text"
                    placeholder={profile.nationality}
                    name="nationality"
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Civil ID Number</label>

                  <input
                    className="form-control"
                    type="text"
                    placeholder={profile.civil_id_number}
                    name="civil_id_number"
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="form-group">
                  <label>
                    {" "}
                    Phone Number <span>eg. +96599991111</span>
                  </label>

                  <input
                    className="form-control"
                    type="text"
                    placeholder={profile.mobile_number}
                    name="mobile_number"
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Secondary Phone Number</label>

                  <input
                    className="form-control"
                    type="text"
                    placeholder={profile.secondary_contact_number}
                    name="secondary_contact_number"
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Governorate</label>

                  <Select
                    styles={customStyles}
                    placeholder={
                      this.state.governorate
                        ? this.state.governorate
                        : "Choose Governorate"
                    }
                    value={governorateOptions.find(
                      (option) => option.value === this.state.governorate
                    )}
                    options={governorateOptions}
                    onChange={(option) => setGovernorate(option)}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Area</label>

                  <input
                    className="form-control"
                    type="text"
                    placeholder={profile.area}
                    name="area"
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Education Level</label>
                  <Select
                    styles={customStyles}
                    placeholder={
                      this.state.education_level
                        ? this.state.education_level
                        : "Education Level"
                    }
                    value={educationOptions.find(
                      (option) => option.value === this.state.education_level
                    )}
                    options={educationOptions}
                    onChange={(option) => setEducation(option)}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Major</label>

                  <input
                    className="form-control"
                    type="text"
                    placeholder={profile.major}
                    name="major"
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="pt-3 pb-3">
                  <input
                    id="registerbtn"
                    className="btn  btn-block add_btn "
                    type="submit"
                    value="Save"
                  />
                </div>
              </form>
            </div>
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
  errors: state.errors.errors,
});
const mapDispatchToProps = (dispatch) => {
  return {
    editProfile: (userData, history) =>
      dispatch(editProfile(userData, history)),
    resetErrors: () => dispatch(resetErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
