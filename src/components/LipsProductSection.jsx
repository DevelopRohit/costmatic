import { useEffect, useState, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { CartContext } from "../context/CartContext";
import styles from "./LipsProductSection.module.css";

function LipsProductSection() {
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

        const lipsProducts = allProducts.filter(
          (item) =>
            item.category &&
            item.category.toLowerCase() === "lips"
        );

        setProducts(lipsProducts);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Lips Collection</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.grid}>
          {products.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageBox}>
                <img src={item.image} alt={item.name} />
              </div>

              <div className={styles.content}>
                <h4>{item.name}</h4>
                <p className={styles.rating}>
                  ⭐ {item.rating}
                </p>
                <p className={styles.price}>
                  ₹{item.price}
                </p>

                <button
                  className={styles.btn}
                  onClick={() => addToCart(item)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default LipsProductSection;