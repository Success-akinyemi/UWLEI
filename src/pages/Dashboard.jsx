import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Power } from "lucide-react";
import { BASE_URL } from "../helpers/url";
import { useFetchUser } from "../helpers/fetch";
import apiCall from "../helpers/apiCall";

function Dashboard() {
  const [showMenu, setShowMenu] = useState(false);
  const [membersListData, setMembersListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const token = localStorage.getItem("UWLEIACCESS");
        const storedUser = localStorage.getItem("user");

        if (storedUser) setUser(JSON.parse(storedUser));

        if (token) {
          const res = await apiCall.get(`/main/my_account/`, {
            headers: { Authorization: `Bearer ${token}` },
          });

          console.log("USER", res?.data);
          setUser(res.data);
        }
      } catch (err) {
        console.error("Error fetching members:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="flex relative">
      {/* SIDEBAR */}
      <div className="w-[15%] relative max-small-pc:flex-[20%] max-tablet:flex-[0]">
        <Sidebar toggleMenu={toggleMenu} showMenu={showMenu} />
      </div>

      {/* MAIN SECTION */}
      <div className="flex-[85%] max-small-pc:flex-[80%] w-full min-h-screen bg-gray-50">
        {/* TOP NAVBAR */}
        <Navbar toggleMenu={toggleMenu} title={"Dashboard"} profile={user?.passport} />

        {/* CONTENT */}
        <div className="contentpad flex flex-col gap-4">
          {/* GREETING + LOGOUT */}
          <div className="flex items-center justify-between">
            <h3 className="text-[24px] max-phone:text-[19px] font-bold">
              Welcome, {" "} {user?.user?.username}
              <span className="text-primary-green">
                {user
                  ? `${user.first_name || user.firstName || ""} ${
                      user.last_name || user.lastName || ""
                    }`
                  : "loading..."}
              </span>
            </h3>

            {/* POWER ICON (LOGOUT) */}
            <button
              onClick={handleLogout}
              title="Logout"
              className="p-2 rounded-full hover:bg-red-100 transition-all"
            >
              <Power className="w-6 h-6 text-red-500 hover:text-red-600" />
            </button>
          </div>

          {/* ACCOUNT OVERVIEW */}
          <div>
            <h5 className="mt-8">Account Overview</h5>
            <div className="mt-6 flex gap-6 max-phone:flex-col">
              <div className="flex flex-1 p-4 flex-col rounded-[10px] bg-primary-green">
                <h2 className="text-white text-[20px] font-semibold">
                  Total Beneficiaries Added
                </h2>
                <p className="text-[25px] text-white">
                  {loading ? "..." : membersListData.length}
                </p>
              </div>
              <div className="flex flex-1 p-4 flex-col rounded-[10px] bg-amber-yellow">
                <h2 className="text-white text-[20px] font-semibold">
                  Total Donations
                </h2>
                <p className="text-[25px] text-white">0</p>
              </div>
            </div>
          </div>

          {/* MEMBERS TABLE */}
          <div className="mt-16">
            <div className="flex w-full overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="text-[12px]">
                  <tr>
                    {[
                      "S/N",
                      "Name",
                      "Email",
                      "Occupation",
                      "Country",
                      "State",
                      "Local Council",
                      "Home Address",
                      "Phone Number",
                      "National ID",
                      "Action",
                    ].map((header, i) => (
                      <th
                        key={i}
                        className="px-4 py-2 text-gray-500 text-start border-b-[1px]"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td
                        colSpan="11"
                        className="text-center py-6 text-gray-400"
                      >
                        Loading...
                      </td>
                    </tr>
                  ) : membersListData.length === 0 ? (
                    <tr>
                      <td
                        colSpan="11"
                        className="text-center py-6 text-gray-400"
                      >
                        No members found
                      </td>
                    </tr>
                  ) : (
                    membersListData.map((member, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 text-[13px]">
                        <td className="px-4 py-2 border-b-[1px]">{idx + 1}</td>
                        <td className="px-4 py-2 border-b-[1px] border-l-[1px]">
                          {member.first_name} {member.last_name}
                        </td>
                        <td className="px-4 py-2 border-b-[1px] border-l-[1px]">
                          {member.email}
                        </td>
                        <td className="px-4 py-2 border-b-[1px] border-l-[1px]">
                          {member.occupation}
                        </td>
                        <td className="px-4 py-2 border-b-[1px] border-l-[1px]">
                          {member.country}
                        </td>
                        <td className="px-4 py-2 border-b-[1px] border-l-[1px]">
                          {member.state}
                        </td>
                        <td className="px-4 py-2 border-b-[1px] border-l-[1px]">
                          {member.local_council}
                        </td>
                        <td className="px-4 py-2 border-b-[1px] border-l-[1px]">
                          {member.home_address}
                        </td>
                        <td className="px-4 py-2 border-b-[1px] border-l-[1px]">
                          {member.phone_number}
                        </td>
                        <td className="px-4 py-2 border-b-[1px] border-l-[1px]">
                          {member.national_id}
                        </td>
                        <td className="px-4 py-2 border-b-[1px] border-l-[1px]">
                          <div className="flex items-center gap-3">
                            <span className="text-green-400 cursor-pointer">
                              Edit
                            </span>
                            <span className="text-red-400 cursor-pointer">
                              Delete
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;