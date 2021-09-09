import "./App.scss";
import Router from "./Router";
import { AuthContextProvider } from "./components/AppContext/Auth.context";

function App() {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  );
}

export default App;
