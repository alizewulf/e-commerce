import { useEffect, useState } from "react";
import Header from "./components/layout/header";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import SignUpPage from "./pages/SignUp";
import type { State } from "./interfaces/interface";
import Footer from "./components/layout/footer";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/Login";
import ProductPage from "./pages/productPage";
import ManageMyAccount from "./pages/manageAccount";
import WishList from "./pages/WishList";

function App() {
  const [state, setState] = useState<State>(() => {
    const savedUser = localStorage.getItem("user");
    const savedWishlist = localStorage.getItem("wishlist");

    return {
      lang: localStorage.getItem("lang") || "en",
      isAuth: !!savedUser,
      user: savedUser ? JSON.parse(savedUser) : null,
      wishlist: savedWishlist ? JSON.parse(savedWishlist) : [],
    };
  });

  const toggleWishlist = (productId: number) => {
    setState((prev) => {
      const isFavorite = prev.wishlist.includes(productId);
      const wishlist = isFavorite
        ? prev.wishlist.filter((id) => id !== productId)
        : [...prev.wishlist, productId];

      return {
        ...prev,
        wishlist,
      };
    });
  };

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  return (
    <BrowserRouter basename="/e-commerce">
      <Header state={state} setState={setState} />

      <main>
        <Routes>
          <Route path="/" element={<HomePage state={state} toggleWishlist={toggleWishlist} />} />
          <Route
            path="/contact"
            element={<ContactPage state={state} setState={setState} />}
          />
          <Route path="/about" element={<AboutPage state={state} />} />
          <Route
            path="/wishlist"
            element={!state.isAuth ? <Navigate to="/signup" /> : <WishList state={state} toggleWishlist={toggleWishlist} />}
          />
          <Route path="/product/:id" element={<ProductPage state={state} toggleWishlist={toggleWishlist} />} />
          <Route
            path="/manage-account"
            element={
              !state.isAuth ? (
                <Navigate to="/signup" />
              ) : (
                <ManageMyAccount state={state} />
              )
            }
          />
          <Route
            path="/signup"
            element={
              !state.isAuth ? (
                <SignUpPage state={state} setState={setState} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/login"
            element={
              !state.isAuth ? (
                <LoginPage state={state} setState={setState} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="*"
            element={<NotFoundPage state={state} setState={setState} />}
          />
        </Routes>
      </main>

      <Footer state={state} setState={setState} />
    </BrowserRouter>
  );
}

export default App;
