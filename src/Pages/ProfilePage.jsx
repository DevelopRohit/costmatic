import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import styles from "./ProfilePage.module.css";

function ProfilePage() {
  const { user, logout, loading } = useContext(UserContext);
  const navigate = useNavigate();

  // ✅ WAIT UNTIL USER LOADS
  if (loading) {
    return (
      <div className={styles.container}>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!user) {
    return (
      <div className={styles.container}>
        <h2>Please Login First</h2>
        <button onClick={() => navigate("/")} className={styles.logbtn}>
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          src={
            user?.photoURL
              ? user.photoURL
              : `https://ui-avatars.com/api/?name=${user?.displayName || "User"}`
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
