import styles from "./EyesPage.module.css";
import EyesProductSection from "../components/EyesProductSection";
import TrustSection from "../components/TrustSection";
import Footer from "../components/Footer";

function EyesPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.left}>
          <h1>
            DEFINE YOUR GAZE <br />
            SMUDGE-PROOF EYE MAKEUP
          </h1>

          <p className={styles.subtitle}>Bold Eyes. Endless Drama.</p>

          <button className={styles.btn}>Explore Eye Collection</button>
        </div>

        <div className={styles.right}>
          <img
            src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop"
            alt="Smudge Proof Eye Makeup"
          />
          {/* <div className={styles.priceTag}>Starting ₹399</div> */}
        </div>
      </section>

      {/* PRODUCTS */}
      <EyesProductSection />
      <TrustSection />
      <Footer />
    </>
  );
}

export default EyesPage;
