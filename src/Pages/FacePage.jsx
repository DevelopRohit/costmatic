import styles from "./FacePage.module.css";
import FaceProductSection from "../components/FaceProductSection";
import TrustSection from "../components/TrustSection";
import Footer from "../components/Footer";

function FacePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.left}>
          <h1>
            FLAWLESS FINISH <br />
            FACE MAKEUP COLLECTION
          </h1>

          <p className={styles.subtitle}>Glow Naturally. Shine Confidently.</p>

          <button className={styles.btn}>Discover Face Range</button>
        </div>

        <div className={styles.right}>
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop"
            alt="Flawless Face Makeup"
          />
          <div className={styles.priceTag}>Starting ₹499</div>
        </div>
      </section>

      {/* PRODUCTS */}
      <FaceProductSection />

      <TrustSection />
      <Footer />
    </>
  );
}

export default FacePage;
