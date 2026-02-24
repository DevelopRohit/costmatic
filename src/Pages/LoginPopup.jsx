import { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import { auth, provider } from "../firebase";
import styles from "./LoginPopup.module.css";

function LoginPopup({ close }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🔥 EMAIL LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      close(); // ✅ close popup after login
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  // 🔥 GOOGLE LOGIN
  const handleGoogle = async () => {
    setError("");

    try {
      await signInWithPopup(auth, provider);
      close(); // ✅ close popup after google login
    } catch (err) {
      setError("Google login failed");
    }
  };

  return (
    <div
      className={styles.overlay}
      onClick={close} // click outside closes
    >
      <div
        className={styles.popup}
        onClick={(e) => e.stopPropagation()} // prevent inside click close
      >
        {/* ❌ CLOSE BUTTON */}
        <button
          className={styles.closeBtn}
          onClick={close}
        >
          ×
        </button>

        <h2>Login to Continue</h2>

        {error && <p className={styles.error}>{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>
        </form>

        <div className={styles.divider}>OR</div>

        <button
          className={styles.googleBtn}
          onClick={handleGoogle}
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default LoginPopup;