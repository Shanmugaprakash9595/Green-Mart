import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import ProtectedRoute from "./components/ProtectedRoute";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import Categories from "./main/Categories/cat";
import Count from "./main/count/count";
import Back from "./main/back/back";
import Brand from "./main/brands/brand";
import Articles from "./main/articles/articles";
import Icon1 from "./main/icon1/icon1";
import Icon2 from "./main/icon2/icon2";
import Ad from "./main/Ad/ad";
import Footer from "./main/footer/footer";
import Home from "./pages/Home";
import Over from "./pages/over";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <AuthProvider>
      <CartProvider>
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Back />
                <Count />
                <Categories />
                <Icon2 />
                <Home searchQuery={searchQuery} />
                <Articles />
                <Icon1 />
                <Ad />
                <Brand />
              </>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <ProtectedRoute>
                <Payment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/order-success"
            element={
              <ProtectedRoute>
                <OrderSuccess />
              </ProtectedRoute>
            }
          />

          <Route path="/seeds" element={<Over searchQuery={searchQuery} />} />
          <Route path="/fer" element={<Over searchQuery={searchQuery} />} />
          <Route path="/pla" element={<Over searchQuery={searchQuery} />} />
          <Route path="/fun" element={<Over searchQuery={searchQuery} />} />
          <Route path="/in" element={<Over searchQuery={searchQuery} />} />
          <Route path="/ani" element={<Over searchQuery={searchQuery} />} />
          <Route path="/mac" element={<Over searchQuery={searchQuery} />} />
          <Route path="/eq" element={<Over searchQuery={searchQuery} />} />
        </Routes>

        <CartSidebar />
        <Footer />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
