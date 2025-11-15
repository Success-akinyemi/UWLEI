import Select from "react-select";
import countryList from "react-select-country-list";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { State } from "country-state-city";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import apiCall from "../helpers/apiCall";
import { notify } from "../utils/taost";

export function NewMemberModal({ showModal, toggleModal }) {
    const [formData, setFormData] = useState({});
    const [ loading, setLoading ] = useState(false)

    const countries = countryList().getData();

/**
const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
};
 */
    const handleChange = (e) => {
        const { id, value, files } = e.target;
        setFormData({
            ...formData,
            [id]: files ? files[0] : value
        });
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

    const handleUploadMembers = async (e) => {
        e.preventDefault();
        if (loading) return;
        try {
            const token = localStorage.getItem("UWLEIACCESS");
            if (token) {
                setLoading(true);

                const data = new FormData();

                // Append all form fields
                Object.entries(formData).forEach(([key, value]) => {
                    if (value instanceof File) {
                        data.append(key, value);
                    } else {
                        data.append(key, value || "");
                    }
                });

                const res = await apiCall.post(`/main/create/`, 
                    data,
                    {
                        headers: { 
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                console.log('ROO', res);

                if (res.status === 201 || res.data) {
                    notify('success', "Member added successfully");
                    toggleModal();
                    setFormData({});
                    window.location.reload()
                } else {
                    notify('error', "Failed to add member. Please try again.");
                }
            }
        } catch (error) {
            console.error(error.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="fixed z-[999] top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center">
            <div className="bg-white w-[45vw] max-tablet:w-[95vw] max-h-[75vh] scroll-bar py-6 px-6 max-phone:px-3 rounded-[20px]">
                <div className="flex justify-end my-4">
                    {/**CLOSE ICON */}
                    <div id="menu-btn" onClick={toggleModal} className="cursor-pointer">
                        <IoClose className='text-[32px] font-bold' />
                    </div>
                </div>

                <div className="">
                    <h3 className='font-semibold text-[19px] text-primary-green'>Add New Member</h3>
                    <p className='text-[15px] '>fill up form below to add a new member</p>
                </div>

                <form className="flex flex-col gap-3">
                    <div className="inputGroup">
                        <label className="label">First Name</label>
                        <input type="text" id='first_name' onChange={handleChange} className="input" />
                    </div>
                    <div className="inputGroup">
                        <label className="label">Last Name</label>
                        <input type="text" id='last_name' onChange={handleChange} className="input" />
                    </div>
                    <div className="inputGroup">{/**optional */}
                        <label className="label">Email (Optional)</label>
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
                            id="local_council"
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
                            id="home_address"
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
                            id="government_id"
                            accept=".png, .jpg, .jpeg"
                            onChange={handleChange}
                            type="file"
                            placeholder="Your National Id"
                            className="input"
                            required
                        />
                    </div>

                    {/**PASSPORT */}
                    <div className="inputGroup">
                        <label className="label">Passport</label>
                        <input
                            id="passport"
                            accept=".png, .jpg, .jpeg"
                            onChange={handleChange}
                            type="file"
                            placeholder="Your passport"
                            className="input"
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <button onClick={handleUploadMembers} type="submit" className="btn2 bg-amber-yellow">{ loading ? 'Uploading...' : 'Submit'}</button>
                    </div>
                </form>

            </div>
        </div>
    )
}