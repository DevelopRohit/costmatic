import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import LoginPopup from "../Pages/LoginPopup"; // ✅ IMPORTANT
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import styles from "./Navbar.module.css";

function Navbar() {
  const navigate = useNavigate();

  const { cart } = useContext(CartContext);
  const { user, loading } = useContext(UserContext);

  // ✅ FIX: popup state
  const [showLogin, setShowLogin] = useState(false);

  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  // 🔥 FETCH PRODUCTS
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

  // 🔥 SEARCH
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
    <>
      {/* ✅ POPUP RENDER */}
      {showLogin && <LoginPopup close={() => setShowLogin(false)} />}

      <header className={styles.navbar}>
        {/* LOGO */}
        <div className={styles.logo} onClick={() => navigate("/")}>
          AsDiv Beauty
        </div>

        {/* MENU */}
        <nav className={styles.menu}>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/lips">LIPS</NavLink>
          <NavLink to="/eyes">EYES</NavLink>
          <NavLink to="/face">FACE</NavLink>
          <NavLink to="/skin">SKIN</NavLink>
          <NavLink to="/orders">MY ORDERS</NavLink>
          <NavLink to="/feedback">FEEDBACK</NavLink>
        </nav>

        {/* SEARCH */}
        <div className={styles.searchWrapper}>
          <FaSearch
            className={styles.searchIcon}
            onClick={() => setShowSearch(!showSearch)}
          />

          {showSearch && (
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />

              {results.length > 0 && (
                <div className={styles.dropdown}>
                  {results.map((item) => (
                    <div
                      key={item.id}
                      className={styles.resultItem}
                      onClick={() => {
                        navigate(`/${item.category}`);
                        setQuery("");
                        setShowSearch(false);
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
        </div>

        {/* ICONS */}
        <div className={styles.icons}>
          {/* ✅ PROFILE FIX */}
          <FaUser
            className={styles.icon}
            onClick={() => {
              if (loading) return; // ⛔ WAIT

              if (user) {
                navigate("/profile");
              } else {
                setShowLogin(true);
              }
            }}
          />

          {/* CART */}
          <div className={styles.cart} onClick={() => navigate("/cart")}>
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
