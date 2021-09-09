import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { empty } from "../components/utils";
import AuthContext from "../components/AppContext/Auth.context";
import { useHistory } from "react-router";

const UserData = ({ log: { user } }: any) => (
  <>
    <p>{user.userId}</p>
    <p>{user.username}</p>
  </>
);

const NotLogged = () => <p>Utilisateur non connecté</p>;

const Logout = () => {
  const [log, setLog] = useState({ loggedIn: false });
  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    console.log(document.cookie);
    axios
      .get("/api/logout")
      // .get("http://localhost:5001/api/logout")
      .then((res) => res.data)
      .then(() => getLoggedIn())
      .then(() => history.push("/"));
    // .then(setLog);
  }, []);

  return (
    <div>
      {!empty(log) && log.loggedIn ? <UserData log={log} /> : <NotLogged />}
    </div>
  );
};

export default Logout;
