import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import styles from "./LoginPopup.module.css";

function LoginPopup({ close }) {
  const { loginWithGoogle, loginWithEmail } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = async () => {
    try {
      await loginWithEmail(email, password);
      close();
    } catch (error) {
      alert("Invalid email or password");
    }
  };

  const handleGoogleLogin = async () => {
    await loginWithGoogle();
    close();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleEmailLogin}>
          Login with Email
        </button>

        <button
          className={styles.google}
          onClick={handleGoogleLogin}
        >
          Login with Google
        </button>

        <button
          className={styles.close}
          onClick={close}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default LoginPopup;
