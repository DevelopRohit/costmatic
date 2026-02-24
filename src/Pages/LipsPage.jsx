
import styles from "./LipsPage.module.css";
import LipsProductSection from "../components/LipsProductSection";
import TrustSection from "../components/TrustSection";
import Footer from "../components/Footer";

function LipsPage() {
  return (
    <>
      <section className={styles.hero}>
        {/* Left Content */}
        <div className={styles.left}>
          <h1>
            PARTNER IN SHINE <br />
            TRANSFERPROOF LIP GLOSS
          </h1>

          <p className={styles.subtitle}>Unstoppable Shine. Limitless You.</p>

          <button className={styles.btn}>Available in 15 shades</button>
        </div>

        {/* Right Product */}
        <div className={styles.right}>
          <img
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop"
            alt="Lip Gloss Product"
          />
          {/* 
        <div className={styles.priceTag}>₹699</div> */}
        </div>
      </section>
      <LipsProductSection />
      <TrustSection />
      <Footer />
    </>
  );
}

export default LipsPage;
