import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../AppContext/Auth.context";
import UidContext from "../AppContext/index.context";

import "./Topbar.scss";

const Topbar = () => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div className="topbarContainer">
      <NavLink exact to="/">
        <div className="logo">
          <h3>Home</h3>
        </div>
      </NavLink>
      {loggedIn ? (
        <NavLink exact to="/logout">
          <div className="logo">
            <h3>Logout</h3>
          </div>
        </NavLink>
      ) : (
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
