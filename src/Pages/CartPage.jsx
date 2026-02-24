import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import styles from "./CartPage.module.css";

function CartPage() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Your Cart</h2>

      {cart.length === 0 ? (
        <p className={styles.empty}>Your cart is empty.</p>
      ) : (
        <div className={styles.layout}>
          {/* LEFT SIDE - PRODUCTS */}
          <div className={styles.products}>
            {cart.map((item) => (
              <div key={item.id} className={styles.card}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.image}
                />

                <div className={styles.info}>
                  <h4>{item.name}</h4>
                  <p className={styles.price}>
                    ₹{item.price}
                  </p>

                  <div className={styles.qtyBox}>
                    <button
                      className={styles.qtyBtn}
                      onClick={() =>
                        decreaseQty(item.id)
                      }
                    >
                      -
                    </button>

                    <span>{item.qty}</span>

                    <button
                      className={styles.qtyBtn}
                      onClick={() =>
                        increaseQty(item.id)
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className={styles.remove}
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - SUMMARY */}
          <div className={styles.summary}>
            <h3>Order Summary</h3>

            <div className={styles.row}>
              <span>Total Items</span>
              <span>
                {cart.reduce(
                  (sum, item) => sum + item.qty,
                  0
                )}
              </span>
            </div>

            <div className={styles.row}>
              <span>Total Price</span>
              <span>₹{total}</span>
            </div>

            <button
              className={styles.checkoutBtn}
              onClick={() =>
                navigate("/checkout")
              }
            >
              Process to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;