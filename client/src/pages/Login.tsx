import axios from "axios";
import { useContext, useEffect } from "react";
import AuthContext from "../components/AppContext/Auth.context";
import { useHistory } from "react-router";

const UserData = ({ user }: any) => (
  <>
    <p>Login</p>
    <p>{user?.userId}</p>
    <p>{user?.username}</p>
  </>
);

const Login = () => {
  const { connexion:{user}, getConnexion } = useContext(AuthContext);
  // const { connexion: { user }, getConnexion } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("/api/login")
      .then(() => getConnexion())
      .then(() => history.push("/"));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* {!empty(log) && log.loggedIn ? <UserData log={log} /> : <NotLogged />} */}
      <UserData user={user} />
    </>
  );
};

export default Login;
