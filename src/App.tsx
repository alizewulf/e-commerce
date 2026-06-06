import { useState } from "react";
import Header from "./components/layout/header";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import SignUpPage from "./pages/SignUp";
import type { State } from "./interfaces/interface";
import Footer from "./components/layout/footer";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/Login";

function App() {
  const [state, setState] = useState<State>(() => {
    const savedUser = localStorage.getItem("user");

    return {
      lang: localStorage.getItem("lang") || "en",
      isAuth: !!savedUser,
      user: savedUser ? JSON.parse(savedUser) : null,
    };
  });

  return (
    <BrowserRouter>
      <Header state={state} setState={setState} />

    <main>
      <Routes>
        <Route path="/" element={<HomePage state={state}/>} />
        <Route path="/contact" element={<ContactPage state={state} setState={setState} />} />
        <Route path="/about" element={<AboutPage state={state} />} />
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
