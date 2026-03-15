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

        const eyesProducts = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .filter(
            (item) =>
              item.category &&
              item.category.toLowerCase() === "eyes"
          );

        setProducts(eyesProducts);

      } catch (error) {

        console.error("Error fetching eyes products:", error);

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

        <p className={styles.loading}>Loading...</p>

      ) : products.length === 0 ? (

        <p className={styles.loading}>No eyes products found.</p>

      ) : (

        <div className={styles.grid}>

          {products.map((item) => {

            const price = Number(item.price) || 0;
            const discountPrice = Number(item.discountPrice) || price;

            const discountPercent = Math.round(
              ((price - discountPrice) / price) * 100
            );

            return (

              <div key={item.id} className={styles.card}>

                {/* IMAGE */}
                <div className={styles.imageBox}>
                  <img src={item.image} alt={item.name} />
                </div>

                {/* CONTENT */}
                <div className={styles.content}>

                  <h4>{item.name}</h4>

                  {item.caption && (
                    <p className={styles.caption}>{item.caption}</p>
                  )}

                  {item.color && (
                    <p className={styles.caption}>
                      Color: {item.color}
                    </p>
                  )}

                  <p className={styles.rating}>
                    ⭐ {item.rating || 4.5}
                  </p>

                  {/* PRICE SECTION */}

                  <div className={styles.priceBox}>

                    {item.discountPrice ? (
                      <>
                        <span className={styles.oldPrice}>
                          ₹{price}
                        </span>

                        <span className={styles.newPrice}>
                          ₹{discountPrice}
                        </span>

                        <span className={styles.discountTag}>
                          {discountPercent}% OFF
                        </span>
                      </>
                    ) : (
                      <span className={styles.newPrice}>
                        ₹{price}
                      </span>
                    )}

                  </div>

                  {/* ADD TO CART */}

                  <button
                    className={styles.btn}
                    onClick={() => addToCart(item)}
                  >
                    Add To Cart
                  </button>

                </div>

              </div>

            );

          })}

        </div>

      )}

    </section>

  );

}

export default EyesProductSection;
