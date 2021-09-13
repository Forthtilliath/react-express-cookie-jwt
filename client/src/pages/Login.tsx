import axios from "axios";
import { useContext, useEffect } from "react";
import AuthContext from "../components/AppContext/Auth.context";
import { useHistory } from "react-router";

const Login = () => {
  const { getConnexion } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("/api/login")
      .then(() => getConnexion())
      .then(() => history.push("/"));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export default Login;
