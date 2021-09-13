import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface IConnexionContext {
  loggedIn: boolean | undefined,
  user?: {
    userId: string,
    username: string
  }
}

const initialContext:IConnexionContext = { loggedIn: undefined };
const AuthContext = createContext({ connexion: initialContext, getConnexion: () => {} });

export const AuthContextProvider = ({
  children,
}: JSX.ElementChildrenAttribute) => {
  const [connexion, setConnexion] = useState(initialContext);

  const getConnexion = async () => {
    await axios
      .get("/api/jwt")
      .then((res) => res.data)
      .then(setConnexion)
  };

  useEffect(() => {
    getConnexion();
  }, []);

  return (
    <AuthContext.Provider value={{ connexion, getConnexion }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
