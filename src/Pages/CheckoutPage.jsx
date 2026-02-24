import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
  const { cart, clearCart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
const handlePayment = async () => {
  try {
    if (!user) {
      alert("Please login first");
      return;
    }

    if (!form.name || !form.address || !form.phone) {
      alert("Please fill all details");
      return;
    }

    const orderId = "ORD" + Date.now();

    await addDoc(collection(db, "orders"), {
      userId: user.uid,
      orderId,
      customer: form,
      items: cart,
      total,
      paymentStatus: "Success",
      createdAt: serverTimestamp(),
    });

    clearCart();

    // 🔥 VERY IMPORTANT: use setTimeout to ensure state update
    setTimeout(() => {
      navigate("/success");
    }, 300);

  } catch (error) {
    console.error("Payment Error:", error);
  }
};
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Checkout</h2>

      <div className={styles.layout}>
        {/* LEFT - FORM */}
        <div className={styles.formCard}>
          <h3>Shipping Details</h3>

          <input
            className={styles.input}
            placeholder="Full Name"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            className={styles.input}
            placeholder="Address"
            onChange={(e) =>
              setForm({ ...form, address: e.target.value })
            }
          />

          <input
            className={styles.input}
            placeholder="Phone Number"
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />

          <button
            className={styles.payBtn}
            onClick={handlePayment}
          >
            Process to Paytm
          </button>
        </div>

        {/* RIGHT - SUMMARY */}
        <div className={styles.summaryCard}>
          <h3>Order Summary</h3>

          {cart.map((item) => (
            <div key={item.id} className={styles.item}>
              <span>
                {item.name} × {item.qty}
              </span>
              <span>
                ₹{item.price * item.qty}
              </span>
            </div>
          ))}

          <hr />

          <div className={styles.totalRow}>
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;