import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import styles from "./TrendingSection.module.css";

function TrendingSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // 🔥 Firestore query (professional method)
        const q = query(
          collection(db, "products"),
          where("category", "==", "trending"),
        );

        const querySnapshot = await getDocs(q);

        const productList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(productList);
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
      <h2 className={styles.heading}>Trending Products</h2>

      {loading ? (
        <p>Loading...</p>
      ) : products.length === 0 ? (
        <p>No trending products found.</p>
      ) : (
        <div className={styles.grid}>
          {products.map((item) => (
            <div key={item.id} className={styles.card}>
              <img src={item.image} alt={item.name} />

              <h4>{item.name}</h4>

              <p>⭐ {item.rating}</p>

              <p className={styles.price}>₹{item.price}</p>

              <button className={styles.btn}>Add To Cart</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default TrendingSection;
