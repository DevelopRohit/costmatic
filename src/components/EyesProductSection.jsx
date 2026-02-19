import { useEffect, useState, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { CartContext } from "../context/CartContext";
import styles from "./EyesProductSection.module.css";

function EyesProductSection() {
  const { addToCart } = useContext(CartContext);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snapshot = await getDocs(collection(db, "products"));

        const allProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Filter eyes category (case-insensitive)
        const eyesProducts = allProducts.filter(
          (item) =>
            item.category &&
            item.category.toLowerCase() === "eyes"
        );

        setProducts(eyesProducts);
      } catch (error) {
        console.error("Firebase Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Eyes Collection</h2>

      {loading ? (
        <p>Loading...</p>
      ) : products.length === 0 ? (
        <p>No eyes products found.</p>
      ) : (
        <div className={styles.grid}>
          {products.map((item) => (
            <div key={item.id} className={styles.card}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>⭐ {item.rating}</p>
              <p className={styles.price}>₹{item.price}</p>

              <button
                className={styles.btn}
                onClick={() => addToCart(item)}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default EyesProductSection;
