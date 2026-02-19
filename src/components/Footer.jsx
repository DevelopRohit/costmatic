import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.topSection}>
        
        {/* Brand */}
        <div className={styles.column}>
          <h2 className={styles.logo}>SUGAR</h2>
          <p>
            Premium beauty products crafted for bold,
            confident & modern personalities.
          </p>

          <div className={styles.socials}>
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.column}>
          <h4>Quick Links</h4>
          <ul>
            <li>Shop</li>
            <li>About Us</li>
            <li>New Arrivals</li>
            <li>Offers</li>
          </ul>
        </div>

        {/* Support */}
        <div className={styles.column}>
          <h4>Customer Support</h4>
          <ul>
            <li>Contact Us</li>
            <li>Shipping Policy</li>
            <li>Return Policy</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className={styles.column}>
          <h4>Subscribe</h4>
          <p>Get latest offers & updates.</p>

          <div className={styles.subscribeBox}>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        © 2026 SUGAR Cosmetics. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;
