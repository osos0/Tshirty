import React, { useContext } from "react";
import { CartContext } from "../componants/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleContinueShopping = () => {
    navigate("/");
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p>Your cart is empty.</p>
          <button
            className="btn btn-primary mt-3"
            onClick={handleContinueShopping}
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
                      Color:{" "}
                      <span style={{ textTransform: "capitalize" }}>
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

          <div className="text-end">
            <h4>
              Total: <span className="text-success">{total} EGP</span>
            </h4>
            <button
              className="btn btn-secondary mt-3"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
            <button className="btn btn-success mt-3 ms-2">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
