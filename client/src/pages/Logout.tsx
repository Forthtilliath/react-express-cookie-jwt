import axios from "axios";
import { useContext, useEffect } from "react";
import AuthContext from "../components/AppContext/Auth.context";
import { useHistory } from "react-router";


const NotLogged = () => <p>Utilisateur non connecté</p>;

const Logout = () => {
  const { getConnexion } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("/api/logout")
      .then(() => getConnexion())
      .then(() => history.push("/"));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <NotLogged />
    </div>
  );
};

export default Logout;
