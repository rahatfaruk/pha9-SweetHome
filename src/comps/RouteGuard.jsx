import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

function RouteGuard({children}) {
  const {user} = useContext(AuthContext)

  if (user) {
    return <>{children}</>
  }

  return <Navigate to={'/signin'}/>
}

export default RouteGuard;