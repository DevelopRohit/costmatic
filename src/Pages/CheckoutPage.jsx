import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.phone ||
      !form.address ||
      !form.city ||
      !form.pincode
    ) {
      alert("Please fill all details");
      return;
    }

    try {
      const orderId = "ORD" + Date.now();

      await addDoc(collection(db, "orders"), {
        orderId,
        customer: form,
        items: cart,
        total,
        createdAt: new Date(),
      });

      clearCart();
      navigate(`/success/${orderId}`);
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Checkout</h2>

      <div className={styles.wrapper}>
        {/* Left Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            onChange={handleChange}
          />

          <textarea
            name="address"
            placeholder="Full Address"
            onChange={handleChange}
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
          />

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            onChange={handleChange}
          />

          <button className={styles.payBtn}>Confirm & Pay ₹{total}</button>
        </form>

        {/* Right Summary */}
        <div className={styles.summary}>
          <h3>Order Summary</h3>

          {cart.map((item) => (
            <div key={item.id} className={styles.item}>
              <span>
                {item.name} × {item.qty}
              </span>
              <span>₹{item.price * item.qty}</span>
            </div>
          ))}

          <hr />

          <h3>Total: ₹{total}</h3>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
