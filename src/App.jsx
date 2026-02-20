import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import LipsPage from "./pages/LipsPage";
import CheckoutPage from "./Pages/CheckoutPage";
import SuccessPage from "./Pages/SuccessPage";
import EyesPage from "./pages/EyesPage";
import FacePage from "./pages/FacePage";
import SkinPage from "./pages/SkinPage";
import FeedbackPage from "./Pages/FeedbackPage";
import LoginPage from "./Pages/LoginPage";
import UserProvider from "./context/UserContext";

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
            <Route path="/success/:orderId" element={<SuccessPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/eyes" element={<EyesPage />} />
            <Route path="/face" element={<FacePage />} />
            <Route path="/skin" element={<SkinPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
          </Routes>{" "}
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
