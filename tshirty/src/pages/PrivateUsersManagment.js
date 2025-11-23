import React, { Component } from "react";

export default class PrivateUsersManagement extends Component {
  state = {
    users: [],
    page: 1,
    limit: 10,
    search: "",
    hasMore: true,
    loading: false,
    errorMessage: "",
  };

  componentDidMount() {
    this.fetchUsers(true);
  }

  componentDidUpdate(prevProps, prevState) {
    // لا تجلب البيانات إلا عند تغيير الصفحة أو البحث
    if (
      prevState.page !== this.state.page ||
      prevState.search !== this.state.search
    ) {
      this.fetchUsers(prevState.search !== this.state.search);
      // إذا كانت نتيجة البحث جديدة (search تغير)، فنحتاج نعيد ضبط البيانات
    }
  }

  fetchUsers = async (reset = false) => {
    const { page, search, limit } = this.state;
    this.setState({ loading: true, errorMessage: "" });

    try {
      const res = await fetch(
        `http://localhost:5000/api/admin/all?search=${search}&page=${page}&limit=${limit}`,
        { credentials: "include" }
      );
      const data = await res.json();

      if (res.ok && data.status === "success") {
        this.setState((prevState) => ({
          users: reset ? data.users : [...prevState.users, ...data.users],
          hasMore: page < data.totalPages,
        }));
      } else {
        this.setState({
          errorMessage: data.message || "Failed to fetch users",
        });
      }
    } catch (error) {
      this.setState({ errorMessage: "Server error. Please try again later." });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleSearch = (e) => {
    const value = e.target.value;
    this.setState({ search: value, page: 1 }); // reset page
  };

  loadMore = () => {
    if (this.state.hasMore) {
      this.setState((prev) => ({ page: prev.page + 1, limit: 5 }));
    }
  };

  showAll = () => {
    this.setState({ page: 1, limit: 1000, users: [] }); // clear users and fetch again
  };

  render() {
    const { users, loading, search, errorMessage, hasMore } = this.state;

    return (
      <div className="container py-4">
        <h2 className="mb-4 text-center">Users Management</h2>

        {/* Search */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by email..."
            value={search}
            onChange={this.handleSearch}
          />
        </div>

        {/* Error */}
        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )}

        {/* Users Table */}
        <div className="table-responsive">
          <table className="table table-striped table-bordered align-middle text-center">
            <thead className="table-dark">
              <tr>
                <th>Email</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Address</th>
                <th style={{ width: "150px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>{user.mobile || "N/A"}</td>
                    <td>
                      {user.address
                        ? `${user.address.building}, ${user.address.city}`
                        : "No address"}
                    </td>
                    <td>
                      <button className="btn btn-warning btn-sm me-2">
                        Edit
                      </button>
                      <button className="btn btn-danger btn-sm">Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No users found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-3 mt-3">
          {hasMore && (
            <button
              className="btn btn-primary"
              onClick={this.loadMore}
              disabled={loading}
            >
              {loading ? "Loading..." : "Load 5 More"}
            </button>
          )}
          <button className="btn btn-success" onClick={this.showAll}>
            Show All Users
          </button>
        </div>
      </div>
    );
  }
}
