import { Navigate, Outlet, useLocation } from "react-router";

const AuthLayout = () => {
  const { state } = useLocation();
  if (localStorage.getItem("access_token")) {
    return <Navigate to={state?.from || "/"} />;
  }
  return <Outlet />;
};

export default AuthLayout;
