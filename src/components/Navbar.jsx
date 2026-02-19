import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import styles from "./Navbar.module.css";
import LoginPopup from "./LoginPopup";

function Navbar() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);

  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(UserContext);

  const [showProfile, setShowProfile] = useState(false);
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [results, setResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const snapshot = await getDocs(collection(db, "products"));
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(list);
    };

    fetchProducts();
  }, []);

  // Live search
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const filtered = products.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()),
    );

    setResults(filtered);
  }, [query, products]);

  return (
    <header className={styles.navbar}>
      {showLogin && <LoginPopup close={() => setShowLogin(false)} />}

      {/* Logo */}
      <div className={styles.logo} onClick={() => navigate("/")}>
        SUGAR
      </div>

      {/* Menu */}
      <nav className={styles.menu}>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/lips">LIPS</NavLink>
        <NavLink to="/eyes">EYES</NavLink>
        <NavLink to="/face">FACE</NavLink>
        <NavLink to="/skin">SKIN</NavLink>
      </nav>

      {/* Search */}
      {showSearch && (
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />

          {results.length > 0 && (
            <div className={styles.dropdown}>
              {results.map((item) => (
                <div
                  key={item.id}
                  className={styles.resultItem}
                  onClick={() => {
                    navigate(`/product/${item.id}`);
                    setShowSearch(false);
                    setQuery("");
                  }}
                >
                  <img src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Right Icons */}
      <div className={styles.icons}>
        <FaSearch
          className={styles.icon}
          onClick={() => setShowSearch(!showSearch)}
        />

        {/* PROFILE DROPDOWN */}
        <div className={styles.profileWrapper}>
          <FaUser
            className={styles.icon}
            onClick={() => setShowProfile(!showProfile)}
          />

          {showProfile && (
            <div className={styles.profileDropdown}>
              {user ? (
                <>
                  <p className={styles.welcome}>Hello, {user.name}</p>

                  <button onClick={() => navigate("/orders")}>My Orders</button>

                  <button onClick={logout}>Logout</button>
                </>
              ) : (
                <button onClick={() => setShowLogin(true)}>Login</button>
              )}
            </div>
          )}
        </div>

        {/* CART */}
        <div className={styles.cart} onClick={() => navigate("/cart")}>
          <FaShoppingBag />
          {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
