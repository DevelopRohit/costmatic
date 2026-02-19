import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import styles from "./CartPage.module.css";

function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart } =
    useContext(CartContext);

  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className={styles.container}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p className={styles.empty}>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className={styles.card}>
              {/* Left Side */}
              <div className={styles.left}>
                <img src={item.image} alt={item.name} />

                <div>
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                </div>
              </div>

              {/* Center Quantity */}
              <div className={styles.qtyBox}>
                <button
                  className={styles.qtyBtn}
                  onClick={() => decreaseQty(item.id)}
                >
                  −
                </button>

                <span className={styles.qtyNumber}>{item.qty}</span>

                <button
                  className={styles.qtyBtn}
                  onClick={() => increaseQty(item.id)}
                >
                  +
                </button>
              </div>

              {/* Right Side */}
              <div className={styles.right}>
                <strong>₹{item.price * item.qty}</strong>

                <button
                  className={styles.removeBtn}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className={styles.summary}>
            <h3>Total: ₹{total}</h3>

            <button
              className={styles.payBtn}
              onClick={() => navigate("/checkout")}
            >
              Proceed to Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
