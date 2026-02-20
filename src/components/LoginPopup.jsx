import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import styles from "./LoginPopup.module.css";

function LoginPopup({ close }) {
  const { login, register, googleLogin } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isRegister) {
        await register(email, password);
      } else {
        await login(email, password);
      }

      close();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <h2>{isRegister ? "Create Account" : "Login"}</h2>

        {error && <p className={styles.error}>{error}</p>}

        <form onSubmit={handleSubmit}>
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

          <button type="submit">{isRegister ? "Register" : "Login"}</button>
        </form>

        <button
          className={styles.googleBtn}
          onClick={async () => {
            await googleLogin();
            close();
          }}
        >
          Continue with Google
        </button>

        <p className={styles.switch} onClick={() => setIsRegister(!isRegister)}>
          {isRegister
            ? "Already have an account? Login"
            : "Don't have an account? Register"}
        </p>

        <span className={styles.close} onClick={close}>
          ✕
        </span>
      </div>
    </div>
  );
}

export default LoginPopup;
