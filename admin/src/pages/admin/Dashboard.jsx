import React from "react";
import { useContext } from "react";
import { AdminContext } from "../../context/Admincontext";
import { useEffect } from "react";
import { assets } from "../../assets/assets_admin/assets";
import { AppContext } from "../../context/Appcontext";
const Dashboard = () => {
  let { atoken, getdashdata, cancelappointment, dashdata } =
    useContext(AdminContext);

    let {slotdateformat}=useContext(AppContext)

  useEffect(() => {
    if (atoken) {
      getdashdata();
    }
  }, [atoken]);

  return (
    dashdata && (
      <div className="m-5">
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
            <img className="w-14" src={assets.doctor_icon} alt="" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashdata.doctors}
              </p>
              <p className="text-gray-400">Doctors</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
            <img className="w-14" src={assets.appointment_icon} alt="" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashdata.appointments}
              </p>
              <p className="text-gray-400">Appointments</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
            <img className="w-14" src={assets.patients_icon} alt="" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashdata.patients}
              </p>
              <p className="text-gray-400">patients</p>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border">
            <img src={assets.list_icon} alt="" />
            <p className="font-semibold">Latest Bookings</p>
          </div>
          <div className="pt-4 border border-t-0">
            {dashdata.latestappointments.map((item, index) => (
              <div className="flex items-center px-6 py-3 gap-3 hover:bg-gray-100" key={index}>
                <img className="rounded-full w-10" src={item.docdata.image} alt="" />
                <div className="flex-1 text-sm">
                  <p className="text-gray-800 font-medium">{item.docdata.name}</p>
                  <p className="text-gray-600">{slotdateformat(item.slotdate)}</p>
                </div>
                {item.cancelled
                            ?<p className="text-red-400 text-xs font-medium">Cancelled</p>
                            : item.iscompleted
                              ?<p className="text-green-500 text-xs font-medium">Completed</p>
                              : <img onClick={()=>cancelappointment(item._id)} className="w-10 cursor-pointer" src={assets.cancel_icon} alt="" />
                            }
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Dashboard;
