import React, { useContext, useState } from "react";
import { CartContext } from "../componants/CartContext";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
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

  const handleContinueShopping = () => {
    navigate("/");
  };

  // const handleWhatsAppOrder = () => {
  //   if (!customerName || !customerPhone) {
  //     alert("Please fill in your name and WhatsApp number.");
  //     return;
  //   }

  //   let orderMessage = `🛒 *New Order*\n\n👤 Name: ${customerName}\n📞 Phone: ${customerPhone}\n`;

  //   if (customerEmail) orderMessage += `📧 Email: ${customerEmail}\n`;

  //   orderMessage += `\n📦 *Order Details:*\n`;

  //   cartItems.forEach((item, index) => {
  //     orderMessage += `\n${index + 1}. ${item.name}\n   Color: ${
  //       item.color
  //     }, Print: ${item.printMethod}\n   Qty: ${item.quantity}, Total: ${
  //       item.price * item.quantity
  //     } EGP\n`;
  //   });

  //   orderMessage += `\n💰 Total Price: ${total} EGP`;

  //   const encodedMessage = encodeURIComponent(orderMessage);

  //   const whatsappURL = `https://wa.me/201280104685?text=${encodedMessage}`;
  //   window.open(whatsappURL, "_blank");
  // };

  //////////////////////////////////////////////////////////////
  const handleCreateOrder = async () => {
    if (cartItems.length === 0) return alert("Cart is empty.");

    setLoading(true);

    try {
      const orderData = {
        items: cartItems.map((item) => ({
          productId: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
        address: currentUser
          ? currentUser.address
          : {
              building: "",
              floor: "",
              apartment: "",
              city: "",
              notes: "",
            },
      };

      const res = await fetch("http://localhost:5000/api/orders/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // مهم جداً
        body: JSON.stringify(orderData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong");

      alert("Order created successfully!");
      navigate("/success");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  //////////////////////////////////////////////////////////////
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

          {/* Customer Info Form */}
          {!currentUser && (
            <div className="mb-4">
              <h5>Customer Info</h5>
              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="form-control"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  type="tel"
                  placeholder="WhatsApp Number"
                  className="form-control"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  type="email"
                  placeholder="Email (optional)"
                  className="form-control"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                />
              </div>
            </div>
          )}

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
            {/* <button
              className="btn btn-success mt-3 ms-2"
              // onClick={handleWhatsAppOrder}
            >
              Confirm & Send via WhatsApp
            </button> */}
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
