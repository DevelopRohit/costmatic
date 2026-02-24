import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import styles from "./ProfilePage.module.css";

function ProfilePage() {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className={styles.container}>
        <h2>Please Login First</h2>
        <button onClick={() => navigate("/login")} className={styles.logbtn}>
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          src={
            user.photoURL ||
            "https://i.pravatar.cc/150?img=3"
          }
          alt="profile"
          className={styles.avatar}
        />

        <h2>{user.displayName || "User"}</h2>
        <p>{user.email}</p>

        <button
          className={styles.logout}
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;