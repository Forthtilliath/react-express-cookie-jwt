import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import AuthContext from "./components/AppContext/Auth.context";
import { useContext } from "react";
import Profile from "./pages/Profile";

const Router = () => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Topbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        {loggedIn ? (
          <>
            <Route exact path="/logout" component={Logout}></Route>
            <Route exact path="/profil" component={Profile}></Route>
          </>
        ) : (
          <>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/profil" component={Profile}></Route>
          </>
        )}
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
