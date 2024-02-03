import { Navigate, Outlet, useLocation } from "react-router";

const MainLayout = () => {
  const location = useLocation();
  const localStorageAccessToken = localStorage.getItem("access_token");
  if (!localStorageAccessToken) {
    return <Navigate to="/auth/login" state={{ from: location.pathname }} />;
  }
  return <Outlet />;
};

export default MainLayout;
