import "./App.scss";
// import { COOKIE_NAME } from './_constants/app.const';
import { useState } from "react";
import Router from "./Router";
import { AuthContextProvider } from "./components/AppContext/Auth.context";

function App() {
  const [uid, setUid] = useState({});

  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  );
}

export default App;
