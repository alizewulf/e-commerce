import { useState } from "react";
import Header from "./components/layout/header";

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
    <>
      <Header state={state} setState={setState} />
    </>
  );
}

export default App;