import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../componants/DashSidebar";
import DashProfile from "../componants/DashProfile";

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
      <div className="">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 DashSidebarFather">
            <DashSidebar />
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12">
            {tab === "profile" && <DashProfile />}
          </div>
        </div>
      </div>
    </>
  );
}
