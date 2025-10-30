import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../componants/DashSidebar";
import DashProfile from "../componants/DashProfile";
import DashDetails from "../componants/DashDetails";
import DashOrder from "../componants/DashOrder";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFormUrl = urlParams.get("tab");
    if (tabFormUrl) {
      setTab(tabFormUrl);
    }
  }, [location.search]);
  return (
    <>
      <div className="dashboardFather">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 DashSidebarFather">
            <DashSidebar />
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12">
            {tab === "profile" && <DashProfile />}
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            {tab === "profile" && <DashDetails />}
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            {tab === "profile" && <DashOrder />}
          </div>
        </div>
      </div>
    </>
  );
}
