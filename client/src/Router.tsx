import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import AuthContext from "./components/AppContext/Auth.context";
import { useContext } from "react";
import Profile from "./pages/Profile";

const Router = () => {
  const { connexion: {loggedIn} } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Topbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        {loggedIn ? (
          <Switch>
            <Route exact path="/logout" component={Logout}/>
            <Route exact path="/profil" component={Profile}/>
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/profil" component={Profile}/>
          </Switch>
        )}
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
