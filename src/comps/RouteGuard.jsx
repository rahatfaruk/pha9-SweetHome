import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Loading from "./Loading";

function RouteGuard({children}) {
  const {user, loading} = useContext(AuthContext)

  if (loading) {
    return <Loading />
  }
  if (user) {
    return <>{children}</>
  }

  return <Navigate to={'/signin'}/>
}

export default RouteGuard;