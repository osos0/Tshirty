import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../componants/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Define a function to close popup (will be used in Navbar)
  const handleCloseCart = () => {
    const closeBtn = document.querySelector(".closeModal");
    if (closeBtn) {
      closeBtn.click();
    }
  };

  // Register this function globally (not recommended usually, but for your setup it's okay)
  useEffect(() => {
    window.closeCartPopup = handleCloseCart;
  }, []);

  const handleGoToCart = () => {
    if (typeof window.closeCartPopup === "function") {
      window.closeCartPopup();
    }
    navigate("/cartpage");
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h3>Your Cart</h3>
        <p>No items in the cart.</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Your Cart</h3>
      <ul className="list-group">
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
                  Color:{" "}
                  <span style={{ textTransform: "capitalize" }}>
                    {item.color}
                  </span>{" "}
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
      <div className="text-end mt-4">
        <h5>
          Total: <span className="text-success">{total} EGP</span>
        </h5>
        <button className="btn btn-primary mt-3" onClick={handleGoToCart}>
          Go to Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
