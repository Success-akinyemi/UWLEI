import { Link } from "react-router-dom";
import LogoImg from "../Assets/Images/logo.jpg";
import { useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { State } from "country-state-city";
import { FaArrowLeft } from "react-icons/fa6";

function Register() {
  const [formData, setFormData] = useState({});
  const [passwordValid, setPasswordValid] = useState({
    length: false,
    special: false,
    number: false,
  });

  const countries = countryList().getData();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleCountryChange = (selected) => {
    setFormData({
      ...formData,
      country: selected.label,
      countryCode: selected.value,
      state: "", // reset state when country changes
    });
  };

  const handleStateChange = (selected) => {
    setFormData({
      ...formData,
      state: selected.label,
      stateCode: selected.value,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, password: value });

    setPasswordValid({
      length: value.length >= 8,
      special: /[!@#$%^&*(),.?":{}|<>]/.test(value),
      number: /\d/.test(value),
    });
  };

  // Get states for the selected country
  const states =
    formData.countryCode &&
    State.getStatesOfCountry(formData.countryCode).map((s) => ({
      value: s.isoCode,
      label: s.name,
    }));

  return (
    <div className="flex flex-col authPage">
      <div className="logo">
        <img alt="logo" src={LogoImg} />
        <p className="!text-brown">UWLEI</p>
      </div>

      {/** AUTH CARD */}
      <div className="flex flex-col gap-[24px] items-start justify-center w-[400px] max-phone:w-[90%] authCard">
        <Link
          to="/"
          className="bg-primary-green h-[40px] w-[40px] rounded-full flex items-center justify-center"
        >
            <FaArrowLeft className='text-[24px] text-white' />
        </Link>

        <h3 className="text-[24px] font-medium text-gray-700">
          Let's get started
        </h3>

        <form id="registerForm" className="flex flex-col gap-[16px] w-full">
          {/** First Name */}
          <div className="inputGroup">
            <label className="label">Username</label>
            <input
              id="username"
              onChange={handleChange}
              type="text"
              placeholder="Enter username"
              className="input"
              required
            />
          </div>

          {/** First Name */}
          <div className="inputGroup">
            <label className="label">First Name</label>
            <input
              id="firstName"
              onChange={handleChange}
              type="text"
              placeholder="Your First name"
              className="input"
              required
            />
          </div>

          {/** Last Name */}
          <div className="inputGroup">
            <label className="label">Last Name</label>
            <input
              id="lastName"
              onChange={handleChange}
              type="text"
              placeholder="Your Last name"
              className="input"
              required
            />
          </div>

          {/** Email */}
          <div className="inputGroup">
            <label className="label">Email</label>
            <input
              id="email"
              onChange={handleChange}
              type="email"
              placeholder="Your email"
              className="input"
              required
            />
          </div>

          {/**Occupation */}
          <div className="inputGroup">
            <label className="label">Occupation</label>
            <input
              id="occupation"
              onChange={handleChange}
              type="text"
              placeholder="Your Occupation"
              className="input"
              required
            />
          </div>

          {/** Country Dropdown */}
          <div className="inputGroup">
            <label className="label">Country</label>
            <Select
              options={countries}
              onChange={handleCountryChange}
              placeholder="Select your country"
              className="w-full"
            />
          </div>

          {/** ✅ State Dropdown (disabled if no country selected) */}
          <div className="inputGroup">
            <label className="label">State/Region</label>
            <Select
              options={states || []}
              onChange={handleStateChange}
              placeholder="Select your state"
              className="w-full"
              isDisabled={!formData.countryCode}
            />
          </div>

          {/**Local council */}
          <div className="inputGroup">
            <label className="label">Local Council</label>
            <input
              id="localCouncil"
              onChange={handleChange}
              type="text"
              placeholder="Your Local council area"
              className="input"
              required
            />
          </div>

          {/**Home address */}
          <div className="inputGroup">
            <label className="label">Home address</label>
            <input
              id="homeAddress"
              onChange={handleChange}
              type="text"
              placeholder="Your Home address"
              className="input"
              required
            />
          </div>

          {/** Phone Input */}
          <div className="inputGroup">
            <label className="label">Phone Number</label>
            <PhoneInput
              country={formData?.countryCode?.toLowerCase() || "us"}
              value={formData.phone || ""}
              onChange={handlePhoneChange}
              inputClass="w-full"
              inputStyle={{ width: "100%" }}
            />
          </div>
          
          {/** National Id */}
          <div className="inputGroup">
            <label className="label">National ID Photo</label>
            <input
              id="nationalId"
              type="file"
              placeholder="Your National Id"
              className="input"
              required
            />
          </div>

          {/** Passport */}
          <div className="inputGroup">
            <label className="label">Passport</label>
            <input
              id="passport"
              onChange={handleChange}
              type="file"
              placeholder="Your National Id"
              className="input"
              required
            />
          </div>

          {/** Password */}
          <div className="inputGroup">
            <label className="label">Password</label>
            <input
              id="password"
              onChange={handlePasswordChange}
              type="password"
              placeholder="Password"
              className="input"
              required
            />
            <div id="password-validation" className="text-sm mt-2 space-y-1">
              <p
                className={
                  passwordValid.length ? "text-green-500" : "text-red-500"
                }
              >
                {passwordValid.length ? "✔" : "❌"} At least 8 characters
              </p>
              <p
                className={
                  passwordValid.special ? "text-green-500" : "text-red-500"
                }
              >
                {passwordValid.special ? "✔" : "❌"} At least 1 special character
              </p>
              <p
                className={
                  passwordValid.number ? "text-green-500" : "text-red-500"
                }
              >
                {passwordValid.number ? "✔" : "❌"} At least 1 number
              </p>
            </div>
          </div>

          {/** Confirm Password */}
          <div className="inputGroup">
            <label className="label">Confirm Password</label>
            <input
              id="confirmPassword"
              onChange={handleChange}
              type="password"
              placeholder="Confirm Password"
              className="input"
              required
            />
          </div>

          <div>
            Already have an account?{" "}
            <Link to="/login" className="text-primary-green underline">
              Login
            </Link>
          </div>

          <div>
            <button type="submit" className="btn2 bg-primary-green w-full">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
