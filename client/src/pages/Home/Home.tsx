import "./Home.scss";
import { empty } from "../../components/utils";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../../components/AppContext/Auth.context";

const UserData = ({ log: { user } }: any) => (
  <>
    {/* <p>{user.userId}</p>
    <p>{user.username}</p> */}
    Connecté
  </>
);

const NotLogged = () => <p>Utilisateur non connecté</p>;

const Home = () => {
  const [log, setLog] = useState({ loggedIn: false });
  const { loggedIn } = useContext(AuthContext);
  

  // useEffect(() => {
    
  // }, []);

  return (
    <>
      {/* {!empty(log) && log.loggedIn ? <UserData log={log} /> : <NotLogged />} */}
      {loggedIn ? <UserData log={log} /> : <NotLogged />}
    </>
  );
};

export default Home;
