import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function LoginPage() {
  const [name, setName] = useState("");
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!name) {
      alert("Enter your name");
      return;
    }

    login(name);
    navigate("/");
  };

  return (
    <div style={{ padding: "150px 80px" }}>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", marginTop: "20px" }}
      />

      <br /><br />

      <button
        onClick={handleLogin}
        style={{
          padding: "10px 20px",
          background: "#be123c",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Login
      </button>
    </div>
  );
}

export default LoginPage;
