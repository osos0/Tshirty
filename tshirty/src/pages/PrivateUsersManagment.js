// import React, { useEffect, useState } from "react";

// export default function PrivateUsersManagment() {
//   const [users, setUsers] = useState([]);
//   const [page, setPage] = useState(1);
//   const [search, setSearch] = useState("");
//   const [hasMore, setHasMore] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const fetchUsers = async (reset = false) => {
//     setLoading(true);
//     setErrorMessage("");

//     try {
//       const res = await fetch(
//         `http://localhost:5000/api/admin/all?search=${search}&page=${page}`,
//         {
//           credentials: "include",
//         }
//       );
//       const data = await res.json();

//       if (res.ok && data.status === "success") {
//         setUsers((prev) => (reset ? data.users : [...prev, ...data.users]));
//         setHasMore(page < data.totalPages);
//       } else {
//         setErrorMessage(data.message || "Failed to fetch users");
//       }
//     } catch (error) {
//       setErrorMessage("Server error. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const debounce = (func, delay) => {
//     let timeout;
//     return (...args) => {
//       clearTimeout(timeout);
//       timeout = setTimeout(() => func(...args), delay);
//     };
//   };

//   const handleSearchChange = debounce((e) => {
//     const value = e.target.value;
//     setSearch(value);
//     setPage(1);
//     fetchUsers(true);
//   }, 500);

//   const loadMore = () => {
//     if (hasMore) {
//       setPage((prev) => prev + 1);
//     }
//   };

//   const downloadAllUsers = () => {
//     alert("📥 Download feature will be implemented soon...");
//   };

//   useEffect(() => {
//     fetchUsers(true);
//   }, []);

//   useEffect(() => {
//     if (page > 1) fetchUsers();
//   }, [page]);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Users Management</h2>

//       {/* Search */}
//       <input
//         type="text"
//         placeholder="Search by email..."
//         onChange={handleSearchChange}
//         style={{ padding: "8px", marginBottom: "10px", width: "300px" }}
//       />

//       {/* Error */}
//       {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

//       {/* Users List */}
//       <ul>
//         {users.length > 0 ? (
//           users.map((user) => (
//             <li key={user._id}>
//               {user.username} – {user.email}
//             </li>
//           ))
//         ) : (
//           <p>No users found.</p>
//         )}
//       </ul>

//       {/* Buttons */}
//       {hasMore && (
//         <button onClick={loadMore} disabled={loading}>
//           {loading ? "Loading..." : "Load More"}
//         </button>
//       )}
//       <button onClick={downloadAllUsers} style={{ marginLeft: "10px" }}>
//         Download All Users
//       </button>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";

export default function PrivateUsersManagment() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchUsers = async (reset = false) => {
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch(
        `http://localhost:5000/api/admin/all?search=${search}&page=${page}`,
        {
          credentials: "include",
        }
      );
      const data = await res.json();

      if (res.ok && data.status === "success") {
        setUsers((prev) => (reset ? data.users : [...prev, ...data.users]));
        setHasMore(page < data.totalPages);
      } else {
        setErrorMessage(data.message || "Failed to fetch users");
      }
    } catch (error) {
      setErrorMessage("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const handleSearchChange = debounce((e) => {
    const value = e.target.value;
    setSearch(value);
    setPage(1);
    fetchUsers(true);
  }, 500);

  const loadMore = () => {
    if (hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  const downloadAllUsers = () => {
    alert("📥 Download feature will be implemented soon...");
  };

  useEffect(() => {
    fetchUsers(true); // first load
  }, []);

  useEffect(() => {
    if (page > 1) fetchUsers(); // load more
  }, [page]);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Users Management</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by email..."
        onChange={handleSearchChange}
        style={{
          padding: "8px",
          width: "300px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      {/* Error */}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {/* Users List */}
      <div
        style={{
          display: "grid",
          gap: "15px",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        }}
      >
        {users.length > 0 ? (
          users.map((user) => (
            <div
              key={user._id}
              style={{
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                background: "#fafafa",
              }}
            >
              <h4 style={{ marginBottom: "8px" }}>{user.username}</h4>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Mobile:</strong> {user.mobile || "Not provided"}
              </p>
              <p>
                <strong>Address:</strong>{" "}
                {user.address
                  ? Object.values(user.address).filter(Boolean).join(", ")
                  : "Not provided"}
              </p>
            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>

      {/* Buttons */}
      <div style={{ marginTop: "20px" }}>
        {hasMore && (
          <button
            onClick={loadMore}
            disabled={loading}
            style={{
              padding: "10px 15px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#007bff",
              color: "white",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        )}
        <button
          onClick={downloadAllUsers}
          style={{
            padding: "10px 15px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#28a745",
            color: "white",
            cursor: "pointer",
          }}
        >
          Download All Users
        </button>
      </div>
    </div>
  );
}
