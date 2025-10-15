import { useEffect, useState } from "react";
import apiCall from "../helpers/apiCall";

function Activity() {
    const [ activities, setActivities ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const fetchMembers = async () => {
        try {
            const token = localStorage.getItem("UWLEIACCESS");
            const storedUser = localStorage.getItem("user");

            if (storedUser) setActivities(JSON.parse(storedUser));

            if (token) {
            const res = await apiCall.get(`/main/activity/`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            setActivities(res.data);
            }
        } catch (err) {
            console.error("Error fetching members:", err);
        } finally {
            setLoading(false);
        }
        };

        fetchMembers();
    }, []);

  return (
    <div>
        <h3 className="text-[1.5rem] text-primary-green font-mediuum">
            {activities?.length <= 1 ? 'Activity' : 'Activities' }
        </h3>

        <div className="mt-6">
            {
                loading ? (
                    <div className=""></div>
                ) : (
                    <div className="flex flex-col">
                        {activities?.length > 0 ? activities?.map((activity, index) => (
                            <div key={index} className="p-4 border-b border-gray-300 last:border-0 flex items-center justify-between">
                                <p className="text-gray-800">{activity?.action}</p>

                                <small className="text-gray-400 font-semibold text-[12px] text-right max-phone:text-[9px]">
                                    {activity?.timestamp
                                        ? new Date(activity.timestamp).toLocaleString(undefined, {
                                            year: 'numeric',
                                            month: 'short', // Sep
                                            day: '2-digit',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            second: '2-digit',
                                            hour12: true, // ✅ AM/PM format
                                        })
                                        : '-'
                                    }
                                </small>

                            </div>
                        )) : (
                            <p className="text-gray-500">No activities found.</p>
                        )}
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Activity
