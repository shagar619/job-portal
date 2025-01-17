import { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }

    if(user){
        return children
    }

    return <Navigate to="/signin" state={location?.pathname}></Navigate>;
};

export default PrivateRoutes;