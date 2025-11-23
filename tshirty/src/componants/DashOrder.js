// import React from "react";

// export default function DashOrder() {
//   return <div>DashOrder</div>;
// }

import React, { useEffect, useState } from "react";

export default function DashOrder() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/orders/my-orders", {
        credentials: "include",
      });

      const data = await res.json();
      setOrders(data.orders || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const getStatusClass = (status) => {
    switch (status) {
      case "pending":
        return "bg-warning text-dark";
      case "processing":
        return "bg-info text-white";
      case "completed":
        return "bg-success text-white";
      case "cancelled":
        return "bg-danger text-white";
      default:
        return "bg-secondary text-white";
    }
  };

  return (
    <div className="mt-4" id="myOrdersSection">
      <h1>My Orders</h1>

      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="row">
          {orders.map((order) => (
            <div key={order._id} className="col-lg-6 col-md-12 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Order #{order._id}</h5>

                  {/* Status bar */}
                  <div className="progress mb-3" style={{ height: "10px" }}>
                    <div
                      className={`progress-bar ${getStatusClass(order.status)}`}
                      role="progressbar"
                      style={{
                        width:
                          order.status === "pending"
                            ? "25%"
                            : order.status === "processing"
                            ? "50%"
                            : order.status === "completed"
                            ? "100%"
                            : "100%",
                      }}
                    ></div>
                  </div>

                  {/* Items */}
                  <ul className="list-group mb-3">
                    {order.items.map((item, i) => (
                      <li
                        key={i}
                        className="list-group-item d-flex justify-content-between"
                      >
                        <span>
                          {item.name} (x{item.quantity})
                        </span>
                        <strong>{item.price * item.quantity} EGP</strong>
                      </li>
                    ))}
                  </ul>

                  <p>
                    <strong>Total:</strong>{" "}
                    <span className="text-success">{order.totalPrice} EGP</span>
                  </p>

                  <p className="text-muted" style={{ fontSize: "12px" }}>
                    {new Date(order.createdAt).toLocaleString()}
                  </p>

                  <span className={`badge ${getStatusClass(order.status)}`}>
                    {order.status.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
