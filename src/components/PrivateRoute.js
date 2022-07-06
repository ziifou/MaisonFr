import { Navigate, Outlet } from "react-router-dom";
import { useStatusAuth } from "./useStatusAuth";
import Spiner from "./Spiner";

function PrivateRoute() {
  const { loggedIn, checkingStatus } = useStatusAuth();
  if (checkingStatus) return <Spiner />;
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default PrivateRoute;
