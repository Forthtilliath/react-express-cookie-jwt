import "./Home.scss";
import { useContext } from "react";
import AuthContext from "../../components/AppContext/Auth.context";

const UserData = ({user}:any) => (
  <>
    <p>Utilisateur connecté</p>
    <p>{user.userId}</p>
    <p>{user.username}</p>
  </>
);

const NotLogged = () => <p>Utilisateur non connecté</p>;

const Home = () => {
  const { connexion } = useContext(AuthContext);

  return (
    <>
      {connexion.loggedIn ? <UserData user={connexion.user} /> : <NotLogged />}
    </>
  );
};

export default Home;
