import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../components/AppContext/Auth.context";
import { useHistory } from "react-router";

const Profile = () => {
  const { getConnexion } = useContext(AuthContext);
  const [reserved, setreserved] = useState("");
  const history = useHistory();

  useEffect(() => {
    axios
      .get("/api/user/profile")
      .then((res) => res.data)
      .then(setreserved)
      .catch((err) => {
        console.error(err);
        getConnexion();
        history.push("/");
      });
  }, []);
  return <div>Profile {reserved}</div>;
};

export default Profile;
