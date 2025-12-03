import React, { useContext, useState } from "react";
import { CartContext } from "../componants/CartContext";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  function base64ToBlob(base64) {
    const byteString = atob(base64.split(",")[1]);
    const mimeString = base64.split(",")[0].split(":")[1].split(";")[0];

    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  }

  const handleCreateOrder = async () => {
    if (cartItems.length === 0) return alert("Cart is empty.");

    setLoading(true);

    try {
      const formData = new FormData();

      // ITEMS
      formData.append(
        "items",
        JSON.stringify(
          cartItems.map((item) => ({
            productId: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            color: item.color,
            printMethod: item.printMethod,
          }))
        )
      );

      // ADDRESS
      formData.append(
        "address",
        JSON.stringify(
          currentUser
            ? currentUser.address
            : {
                building: "",
                floor: "",
                apartment: "",
                city: "",
                notes: "",
              }
        )
      );

      // IMAGES — NEW FIX
      cartItems.forEach((item, index) => {
        if (item.image) {
          const blobImage = base64ToBlob(item.image);
          formData.append("images", blobImage, `item-${index}.png`);
        }
      });

      const res = await fetch("http://localhost:5000/api/orders/create", {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");

      // 🟢 أهم خطوة: تصفير الكارت بدون ريفريش
      clearCart();

      alert("Order created successfully!");
      navigate("/success");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p>Your cart is empty.</p>
          <button
            className="btn btn-primary mt-3"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <ul className="list-group mb-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      width="60"
                      height="60"
                      style={{ objectFit: "contain", marginRight: "15px" }}
                    />
                  )}
                  <div>
                    <strong>{item.name}</strong>
                    <div style={{ fontSize: "14px" }}>
                      Color:
                      <span style={{ textTransform: "capitalize" }}>
                        {" "}
                        {item.color}
                      </span>
                      <br />
                      Print: {item.printMethod}
                    </div>
                  </div>
                </div>

                <div>
                  {item.quantity} × {item.price} EGP ={" "}
                  <strong>{item.quantity * item.price} EGP</strong>
                </div>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Customer Info */}
          {!currentUser && (
            <div className="mb-4">
              <h5>Customer Info</h5>
              <input
                className="form-control mb-2"
                placeholder="Full Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />

              <input
                className="form-control mb-2"
                placeholder="WhatsApp Number"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
              />

              <input
                className="form-control mb-2"
                placeholder="Email (optional)"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
              />
            </div>
          )}

          <div className="text-end">
            <h4>
              Total: <span className="text-success">{total} EGP</span>
            </h4>

            <button
              className="btn btn-secondary mt-3"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>

            <button
              className="btn btn-success mt-3 ms-2"
              onClick={handleCreateOrder}
              disabled={loading}
            >
              {loading ? "Processing..." : "Confirm Order"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
