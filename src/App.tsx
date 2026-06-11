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
import CategoryPage from "./pages/CategoryPage";
import ManageMyAccount from "./pages/manageAccount";
import AdminPanel from "./pages/admin";
import WishList from "./pages/WishList";
import CartPage from "./pages/cart/Cart";

function App() {
  const [state, setState] = useState<State>(() => {
    const savedUser = localStorage.getItem("user");
    const savedWishlist = localStorage.getItem("wishlist");
    const savedCart = localStorage.getItem("cart");

    return {
      lang: localStorage.getItem("lang") || "en",
      isAuth: !!savedUser,
      user: savedUser ? JSON.parse(savedUser) : null,
      wishlist: savedWishlist ? JSON.parse(savedWishlist) : [],
      cart: savedCart ? JSON.parse(savedCart) : [],
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

  const addToCart = (productId: number, quantity = 1, removeFromWishlist = false) => {
    setState((prev) => {
      const normalizedQuantity = Math.max(1, quantity);
      const existingItem = prev.cart.find((item) => item.id === productId);
      const cart = existingItem
        ? prev.cart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + normalizedQuantity }
              : item,
          )
        : [...prev.cart, { id: productId, quantity: normalizedQuantity }];

      const wishlist = removeFromWishlist
        ? prev.wishlist.filter((id) => id !== productId)
        : prev.wishlist;

      return {
        ...prev,
        cart,
        wishlist,
      };
    });
  };

  const moveWishlistToCart = () => {
    setState((prev) => {
      if (prev.wishlist.length === 0) return prev;

      const cartMap = new Map(prev.cart.map((item) => [item.id, item.quantity]));
      prev.wishlist.forEach((productId) => {
        cartMap.set(productId, (cartMap.get(productId) ?? 0) + 1);
      });

      return {
        ...prev,
        cart: Array.from(cartMap.entries()).map(([id, quantity]) => ({ id, quantity })),
        wishlist: [],
      };
    });
  };

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <BrowserRouter basename="/e-commerce">
      <Header state={state} setState={setState} />

      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage state={state} toggleWishlist={toggleWishlist} />}
          />
          <Route
            path="/contact"
            element={<ContactPage state={state} setState={setState} />}
          />
          <Route path="/about" element={<AboutPage state={state} />} />
          <Route
            path="/wishlist"
            element={
              !state.isAuth ? (
                <Navigate to="/signup" />
              ) : (
                <WishList
                  state={state}
                  toggleWishlist={toggleWishlist}
                  addToCart={(productId) => addToCart(productId, 1, true)}
                  moveAllToCart={moveWishlistToCart}
                />
              )
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductPage
                state={state}
                toggleWishlist={toggleWishlist}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/category/:category"
            element={
              <CategoryPage state={state} toggleWishlist={toggleWishlist} />
            }
          />
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
            path="/admin"
            element={
              !state.isAuth ? (
                <Navigate to="/signup" />
              ) : state.user?.isAdmin ? (
                <AdminPanel state={state} />
              ) : (
                <Navigate to="/" />
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
            path="/cart"
            element={!state.isAuth ? (
              <Navigate to="/" />
            ) : (
              <CartPage state={state} setState={setState} />
            )}
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
