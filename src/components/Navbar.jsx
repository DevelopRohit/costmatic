import { FaUser, FaShoppingBag } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import LoginPopup from "../Pages/LoginPopup";
import styles from "./Navbar.module.css";

function Navbar() {
  const navigate = useNavigate();

  const { cart } = useContext(CartContext);
  const { user } = useContext(UserContext);

  const [showLogin, setShowLogin] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <>
      {/* 🔥 LOGIN POPUP */}
      {showLogin && <LoginPopup close={() => setShowLogin(false)} />}

      <header className={styles.navbar}>
        <div className={styles.logo} onClick={() => navigate("/")}>
          SUGAR
        </div>

        <nav className={styles.menu}>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/lips">LIPS</NavLink>
          <NavLink to="/eyes">EYES</NavLink>
          <NavLink to="/face">FACE</NavLink>
          <NavLink to="/skin">SKIN</NavLink>
          <NavLink to="/orders">MY ORDERS</NavLink>
          <NavLink to="/feedback">FEEDBACK</NavLink>
        </nav>

        <div className={styles.icons}>
          {/* PROFILE ICON */}
          <FaUser
            className={styles.icon}
            onClick={() => {
              if (!user) {
                setShowLogin(true); // 🔥 open popup
              } else {
                navigate("/profile"); // 🔥 go profile page
              }
            }}
          />

          {/* CART */}
          <div
            className={styles.cart}
            onClick={() => navigate("/cart")}
          >
            <FaShoppingBag />
            {totalItems > 0 && (
              <span className={styles.badge}>{totalItems}</span>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;