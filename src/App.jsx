import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import Home from "./Pages/Home";
import LipsPage from "./Pages/LipsPage";
import CheckoutPage from "./Pages/CheckoutPage";
import SuccessPage from "./Pages/SuccessPage";
import EyesPage from "./Pages/EyesPage";
import FacePage from "./Pages/FacePage";
import OrderHistoryPage from "./Pages/OrderHistoryPage";
import SkinPage from "./Pages/SkinPage";
import FeedbackPage from "./Pages/FeedbackPage";
import LoginPage from "./Pages/LoginPage";
import UserProvider from "./context/UserContext";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lips" element={<LipsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/eyes" element={<EyesPage />} />
            <Route path="/face" element={<FacePage />} />
            <Route path="/skin" element={<SkinPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>{" "}
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
