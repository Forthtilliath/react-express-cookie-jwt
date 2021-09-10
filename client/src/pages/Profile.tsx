import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../components/AppContext/Auth.context";

const Profile = () => {
    // const { getLoggedIn } = useContext(AuthContext);
    const [reserved, setreserved] = useState("")
  
    useEffect(() => {
      axios
        .get("/api/user/profile")
        .then((res) => res.data)
        .then(setreserved)
    }, []);
    return (
        <div>
            Profile {reserved}
        </div>
    );
};

export default Profile;