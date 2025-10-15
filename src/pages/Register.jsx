import { Link, useNavigate } from "react-router-dom";
import LogoImg from "../Assets/Images/logo.jpg";
import { useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { State } from "country-state-city";
import { FaArrowLeft } from "react-icons/fa6";
import { register } from "../helpers/api";
import { notify } from "../utils/taost";

function Register() {
  const [formData, setFormData] = useState({});
  const [passwordValid, setPasswordValid] = useState({
    length: false,
    special: false,
    number: false,
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const countries = countryList().getData();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleCountryChange = (selected) => {
    setFormData({
      ...formData,
      country: selected.label,
      countryCode: selected.value,
      state: "",
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

  const states =
    formData.countryCode &&
    State.getStatesOfCountry(formData.countryCode).map((s) => ({
      value: s.isoCode,
      label: s.name,
    }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (formData.password !== formData.confirmPassword) {
      notify("error", "Passwords do not match!");
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();
      data.append("username", formData.username);
      data.append("first_name", formData.firstName);
      data.append("last_name", formData.lastName);
      data.append("email", formData.email);
      data.append("occupation", formData.occupation || "");
      data.append("country", formData.country || "");
      data.append("state", formData.state || "");
      data.append("local_council", formData.localCouncil || "");
      data.append("home_address", formData.homeAddress || "");
      data.append("phone", formData.phone || "");
      data.append("password", formData.password);

      const nationalIdFile = document.getElementById("nationalId")?.files[0];
      const passportFile = document.getElementById("passport")?.files[0];
      if (nationalIdFile) data.append("government_id", nationalIdFile);
      if (passportFile) data.append("passport", passportFile);

      const res = await register(data);

      if (res?.status === 201 || res?.status === true) {
        notify("success", "Registration successful, Thank You!");
        navigate("/login");
      } else {
        Object.values(res?.errors).forEach(errorArray => {
            errorArray.forEach(msg => {
                notify('error', msg);
            });
        });
        //notify("error", "Registration successful. Thank You!");
        //navigate("/login");
      }
    } catch (error) {
      console.error("REG ERROR:", error?.response?.data || error);
      notify(
        "error",
        error?.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col authPage">
      <div className="logo">
        <img alt="logo" src={LogoImg} />
        <p className="!text-brown">UWLEI</p>
      </div>

      <div className="flex flex-col gap-[24px] items-start justify-center w-[400px] max-phone:w-[90%] authCard">
        <Link
          to="/"
          className="bg-primary-green h-[40px] w-[40px] rounded-full flex items-center justify-center"
        >
          <FaArrowLeft className="text-[24px] text-white" />
        </Link>

        <h3 className="text-[24px] font-medium text-gray-700">
          Let's get started
        </h3>

        <form
          id="registerForm"
          
          className="flex flex-col gap-[16px] w-full"
        >
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

          <div className="inputGroup">
            <label className="label">Occupation</label>
            <input
              id="occupation"
              onChange={handleChange}
              type="text"
              placeholder="Your Occupation"
              className="input"
            />
          </div>

          <div className="inputGroup">
            <label className="label">Country</label>
            <Select
              options={countries}
              onChange={handleCountryChange}
              placeholder="Select your country"
              className="w-full"
            />
          </div>

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

          <div className="inputGroup">
            <label className="label">Local Council</label>
            <input
              id="localCouncil"
              onChange={handleChange}
              type="text"
              placeholder="Your Local council area"
              className="input"
            />
          </div>

          <div className="inputGroup">
            <label className="label">Home address</label>
            <input
              id="homeAddress"
              onChange={handleChange}
              type="text"
              placeholder="Your Home address"
              className="input"
            />
          </div>

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

          <div className="inputGroup">
            <label className="label">National ID Photo</label>
            <input id="nationalId" type="file" className="input" />
          </div>

          <div className="inputGroup">
            <label className="label">Passport</label>
            <input id="passport" type="file" className="input" />
          </div>

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
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn2 bg-primary-green w-full"
              disabled={loading}
            >
              {loading ? "Please wait..." : "REGISTER"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
