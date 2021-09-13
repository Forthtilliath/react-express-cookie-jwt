import axios from "axios";
import { useContext } from "react";
import AuthContext from "../components/AppContext/Auth.context";
import { useHistory } from "react-router";

const Logout = () => {
  const { getConnexion } = useContext(AuthContext);
  const history = useHistory();

  const disconnect = () => {
    axios
      .get("/api/logout")
      .then(() => getConnexion())
      .then(() => history.push("/"));
  };

  return <h3 onClick={disconnect}>Logout</h3>;
};

export default Logout;
