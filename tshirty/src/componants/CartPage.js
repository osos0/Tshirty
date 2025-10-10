// import React, { useContext } from "react";
// import { CartContext } from "../componants/CartContext";
// import { useNavigate } from "react-router-dom";

// const CartPage = () => {
//   const { cartItems, removeFromCart } = useContext(CartContext);
//   const navigate = useNavigate();

//   const total = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   const handleContinueShopping = () => {
//     navigate("/");
//   };

//   return (
//     <div className="container py-5">
//       <h2 className="mb-4 text-center">Your Shopping Cart</h2>

//       {cartItems.length === 0 ? (
//         <div className="text-center">
//           <p>Your cart is empty.</p>
//           <button
//             className="btn btn-primary mt-3"
//             onClick={handleContinueShopping}
//           >
//             Continue Shopping
//           </button>
//         </div>
//       ) : (
//         <>
//           <ul className="list-group mb-4">
//             {cartItems.map((item) => (
//               <li
//                 key={item.id}
//                 className="list-group-item d-flex justify-content-between align-items-center"
//               >
//                 <div className="d-flex align-items-center">
//                   {item.image && (
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       width="60"
//                       height="60"
//                       style={{ objectFit: "contain", marginRight: "15px" }}
//                     />
//                   )}
//                   <div>
//                     <strong>{item.name}</strong>
//                     <div style={{ fontSize: "14px" }}>
//                       Color:{" "}
//                       <span style={{ textTransform: "capitalize" }}>
//                         {item.color}
//                       </span>
//                       <br />
//                       Print: {item.printMethod}
//                     </div>
//                   </div>
//                 </div>
//                 <div>
//                   {item.quantity} × {item.price} EGP ={" "}
//                   <strong>{item.quantity * item.price} EGP</strong>
//                 </div>
//                 <button
//                   className="btn btn-sm btn-danger"
//                   onClick={() => removeFromCart(item.id)}
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>

//           <div className="text-end">
//             <h4>
//               Total: <span className="text-success">{total} EGP</span>
//             </h4>
//             <button
//               className="btn btn-secondary mt-3"
//               onClick={handleContinueShopping}
//             >
//               Continue Shopping
//             </button>
//             <button className="btn btn-success mt-3 ms-2">Checkout</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CartPage;

import React, { useContext, useState } from "react";
import { CartContext } from "../componants/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleContinueShopping = () => {
    navigate("/");
  };

  const handleWhatsAppOrder = () => {
    if (!customerName || !customerPhone) {
      alert("Please fill in your name and WhatsApp number.");
      return;
    }

    let orderMessage = `🛒 *New Order*\n\n👤 Name: ${customerName}\n📞 Phone: ${customerPhone}\n`;

    if (customerEmail) orderMessage += `📧 Email: ${customerEmail}\n`;

    orderMessage += `\n📦 *Order Details:*\n`;

    cartItems.forEach((item, index) => {
      orderMessage += `\n${index + 1}. ${item.name}\n   Color: ${
        item.color
      }, Print: ${item.printMethod}\n   Qty: ${item.quantity}, Total: ${
        item.price * item.quantity
      } EGP\n`;
    });

    orderMessage += `\n💰 Total Price: ${total} EGP`;

    const encodedMessage = encodeURIComponent(orderMessage);

    const whatsappURL = `https://wa.me/201280104685?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
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

          {/* Customer Info Form */}
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
            <button
              className="btn btn-success mt-3 ms-2"
              onClick={handleWhatsAppOrder}
            >
              Confirm & Send via WhatsApp
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
