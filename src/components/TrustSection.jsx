import { FaBoxOpen, FaLeaf, FaAward } from "react-icons/fa";
import styles from "./TrustSection.module.css";

function TrustSection() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>

        <div className={styles.card}>
          <FaBoxOpen className={styles.icon} />
          <h4>EASY RETURNS</h4>
          <p>Hassle-free 7 day return policy for your peace of mind.</p>
        </div>

        <div className={styles.card}>
          <FaLeaf className={styles.icon} />
          <h4>CRUELTY FREE</h4>
          <p>100% cruelty-free beauty. No animal testing ever.</p>
        </div>

        <div className={styles.card}>
          <FaAward className={styles.icon} />
          <h4>QUALITY FIRST</h4>
          <p>Premium ingredients & high performance formulas.</p>
        </div>

      </div>
    </section>
  );
}

export default TrustSection;
