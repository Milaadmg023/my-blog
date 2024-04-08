import React from "react";
import { Link, useNavigate, Outlet, useLocation } from "react-router-dom";
import BoxContainer from "../Components/Dashboard/BoxContainer";
import DashboardItems from "../Components/Dashboard/DashboardItems";
import PannelMenu from "../Components/Dashboard/PannelMenu";
import Loading from "./../Components/Loading";

function Dashboard() {
  const Navigate = useNavigate();
  React.useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      Navigate("/login");
    }
  });
  console.log(localStorage.getItem("access_token"));
  const location = useLocation();
  const pathname = location.pathname;
  const directory = pathname.split("/")[1];
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div
          className="min-h-[80vh] p-2 rounded-lg mx-2 lg:mx-10 flex gap-1 flex-col"
          dir="rtl"
        >
          <PannelMenu />
          <div id="items" className=" bg-blue-100 rounded-lg">
            <DashboardItems />
            <div>
              <BoxContainer />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;
