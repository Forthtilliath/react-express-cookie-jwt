import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { empty } from "../components/utils";
import AuthContext from "../components/AppContext/Auth.context";
import { useHistory } from "react-router";

const UserData = ({ log: { user } }: any) => (
  <>
    <p>Login</p>
    {/* <p>{user.userId}</p>
    <p>{user.username}</p> */}
  </>
);

const Login = () => {
  const [log, setLog] = useState({});
  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("/api/login")
      .then((res) => res.data)
      .then(() => getLoggedIn())
      .then(() => history.push("/"));
  }, []);

  return <div>{!empty(log) && <UserData log={log} />}</div>;
};

export default Login;
