import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({ loggedIn: false, getLoggedIn: () => {} });

// type Props = {
//   children?: JSX.Element | JSX.Element[];
// };

// export const AuthContextProvider = ({ children }: Props) => {
export const AuthContextProvider = ({
  children,
}: JSX.ElementChildrenAttribute) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const getLoggedIn = () => {
    axios
      .get("/api/jwt")
      .then((res) => res.data)
      .then(setLoggedIn);
  };

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
