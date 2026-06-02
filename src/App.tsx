import { useState } from "react";
import Header from "./components/layout/header";
import { BrowserRouter,Route, Routes } from "react-router-dom";
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

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/signup" element={<SignUpPage state={state} setState={setState}/>}/>
        <Route path="/login" element={<LoginPage state={state} setState={setState}/>}/>
        <Route path="*" element={<NotFoundPage state={state} setState={setState}/>}/>
      </Routes>

      <Footer state={state} setState={setState}/>
    </BrowserRouter>
  );
}

export default App;
