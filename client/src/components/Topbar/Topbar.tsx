import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logout from "../../pages/Logout";
import AuthContext from "../AppContext/Auth.context";

import "./Topbar.scss";

const Topbar = () => {
  const {
    connexion: { loggedIn },
  } = useContext(AuthContext);

  return (
    <div className="topbarContainer">
      <NavLink exact to="/">
        <div className="logo">
          <h3>Home</h3>
        </div>
      </NavLink>
      {loggedIn && (
        <>
          <NavLink exact to="/profil">
            <div className="logo">
              <h3>Profil</h3>
            </div>
          </NavLink>
          {/* <NavLink exact to="/logout"> */}
            <div className="logo">
              <Logout />
            </div>
          {/* </NavLink> */}
        </>
      )}
      {loggedIn === false && (
        <NavLink exact to="/login">
          <div className="logo">
            <h3>Login</h3>
          </div>
        </NavLink>
      )}
    </div>
  );
};

export default Topbar;
