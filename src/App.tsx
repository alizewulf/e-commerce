import { useState } from "react";
import Header from "./components/layout/header";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import SignUpPage from "./pages/Signup";

export interface State {
  lang: string;
}

export interface StateProps {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
}

function App() {
  const [state, setState] = useState<State>({
    lang: "en",
  });

  return (
    <BrowserRouter>
      <Header state={state} setState={setState} />

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;