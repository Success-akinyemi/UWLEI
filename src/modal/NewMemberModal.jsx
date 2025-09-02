import Select from "react-select";
import countryList from "react-select-country-list";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { State } from "country-state-city";
import { useState } from "react";

export function NewMemberModal({ showModal, toggleModal }) {
    const [formData, setFormData] = useState({});

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

    // Get states for the selected country
    const states =
        formData.countryCode &&
        State.getStatesOfCountry(formData.countryCode).map((s) => ({
            value: s.isoCode,
            label: s.name,
        }));

    //upload member data here

    return (
        <div className="fixed z-[999] top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center">
            <div className="bg-white w-[45vw] max-tablet:w-[80vw] max-h-[75vh] scroll-bar py-6 px-6 rounded-[20px]">
                <div className="flex justify-end my-4">
                    {/**CLOSE ICON */}
                    <div id="menu-btn" onClick={toggleModal} className="cursor-pointer">
                        <i class="fa-solid fa-xmark text-[24px]"></i>
                    </div>
                </div>

                <div className="">
                    <h3 className='font-semibold text-amber-yellow text-[19px]'>Add New Member</h3>
                    <p className='text-[15px] '>fill up form below to add a new member</p>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="inputGroup">
                        <label className="label">First Name</label>
                        <input type="text" id='firstName' onChange={handleChange} className="input" />
                    </div>
                    <div className="inputGroup">
                        <label className="label">Last Name</label>
                        <input type="text" id='lastName' onChange={handleChange} className="input" />
                    </div>
                    <div className="inputGroup">
                        <label className="label">Email</label>
                        <input type="email" id='email' onChange={handleChange} className="input" />
                    </div>
                    <div className="inputGroup">
                        <label className="label">Occupation</label>
                        <input type="text" id='occupation' onChange={handleChange} className="input" />
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
                        <label className="label">State</label>
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
                        <label className="label">National ID</label>
                        <input
                            id="nationalId"
                            onChange={handleChange}
                            type="text"
                            placeholder="Your National Id"
                            className="input"
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <div className="btn2 bg-amber-yellow">Submit</div>
                    </div>
                </div>

            </div>
        </div>
    )
}