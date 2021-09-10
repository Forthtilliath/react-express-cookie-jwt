import "./Home.scss";
import { empty } from "../../components/utils";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../../components/AppContext/Auth.context";

const UserData = ({user}:any) => (
  <>
    <p>Connecté</p>
    <p>{user.userId}</p>
    <p>{user.username}</p>
  </>
);

const NotLogged = () => <p>Utilisateur non connecté</p>;

const Home = () => {
  const { connexion } = useContext(AuthContext);

  // useEffect(() => {

  // }, []);

  return (
    <>
      {/* {!empty(log) && log.loggedIn ? <UserData log={log} /> : <NotLogged />} */}
      {connexion.loggedIn ? <UserData user={connexion.user} /> : <NotLogged />}
    </>
  );
};

export default Home;
