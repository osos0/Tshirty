// import React from "react";

// export default function adminPanel() {
//   return <div>adminPanel</div>;
// }

import React from "react";
import { Link } from "react-router-dom";

export default function AdminPanel() {
  return (
    <div className="container AdminPanelFather">
      <h1>Admin Panel</h1>
      <div className="row AdminPanelLinks">
        <div
          className="col-12 AdminPanelLinksSon"
          style={{ backgroundColor: "#f7a000ff" }}
        >
          <Link to="/admin-users">👤 Users Management</Link>
        </div>
        <div
          className="col-12 AdminPanelLinksSon"
          style={{ backgroundColor: "#008a83ff" }}
        >
          <Link to="/admin-orders">📦 Orders Management</Link>
        </div>
        <div
          className="col-12 AdminPanelLinksSon"
          style={{ backgroundColor: "#551f88ff" }}
        >
          <Link to="/admin-products">🛒 Products Management</Link>
        </div>
      </div>
    </div>
  );
}
