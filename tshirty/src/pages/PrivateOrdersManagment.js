import React, { useEffect, useState } from "react";

export default function PrivateOrdersManagment() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);

        const res = await fetch("http://localhost:5000/api/orders/all", {
          credentials: "include",
        });

        const data = await res.json();

        console.log("Fetched:", data);

        if (!res.ok) {
          throw new Error(data.message || "Failed to load orders");
        }

        // 🎯 هنا الخطأ كان
        setOrders(data.orders); // لازم تاخد array وبس
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const filteredOrders = orders
    .filter((order) =>
      statusFilter === "all" ? true : order.status === statusFilter
    )
    .filter((order) => order._id.toLowerCase().includes(search.toLowerCase()));

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/orders/${orderId}/status`,
        {
          method: "PUT",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setOrders((prev) =>
        prev.map((order) =>
          order._id === orderId ? { ...order, status: newStatus } : order
        )
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container py-4">
      <h2>Orders Management</h2>

      <div className="row mb-3">
        <div className="col-md-4">
          <select
            className="form-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="pending">🟡 Pending</option>
            <option value="processing">🔵 Processing</option>
            <option value="completed">🟢 Completed</option>
            <option value="cancelled">🔴 Cancelled</option>
          </select>
        </div>

        <div className="col-md-4">
          <input
            type="text"
            placeholder="Search by Order ID..."
            className="form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : filteredOrders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Change Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user?.username || "Deleted User"}</td>
                <td>{order.totalPrice} EGP</td>
                <td>{order.status}</td>

                <td>
                  <select
                    className="form-select"
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(order._id, e.target.value)
                    }
                  >
                    <option value="pending">🟡 Pending</option>
                    <option value="processing">🔵 Processing</option>
                    <option value="completed">🟢 Completed</option>
                    <option value="cancelled">🔴 Cancelled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
