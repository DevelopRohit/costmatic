import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import styles from "./LoginPopup.module.css";

function LoginPopup({ close }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      close();
    } catch {
      setError("Invalid email or password");
    }
  };

  const handleGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      console.log("Google User:", result.user); // 🔍 check

      close(); // popup close
    } catch (err) {
      console.log(err);
      setError("Google login failed");
    }
  };
  return (
    <div className={styles.overlay} onClick={close}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={close}>
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

          <button type="submit">Login</button>
        </form>

        <div className={styles.divider}>OR</div>

        <button className={styles.googleBtn} onClick={handleGoogle}>
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default LoginPopup;
