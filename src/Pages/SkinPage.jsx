import styles from "./SkinPage.module.css";
import SkinProductSection from "../components/SkinProductSection";
import TrustSection from "../components/TrustSection";
import Footer from "../components/Footer";

function SkinPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.left}>
          <h1>
            GLOW FROM WITHIN <br />
            SKINCARE ESSENTIALS
          </h1>

          <p className={styles.subtitle}>
            Nourish. Hydrate. Illuminate.
          </p>

          <button className={styles.btn}>
            Explore Skincare Range
          </button>
        </div>

        <div className={styles.right}>
          <img
            src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800"
            alt="Skincare"
          />
          <div className={styles.priceTag}>Starting ₹399</div>
        </div>
      </section>

      {/* PRODUCTS */}
      <SkinProductSection />

      <TrustSection />
      <Footer />
    </>
  );
}

export default SkinPage;
