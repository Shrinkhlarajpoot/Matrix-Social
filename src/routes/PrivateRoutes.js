import { useSelector } from "react-redux";
import { useLocation, Outlet, Navigate } from "react-router-dom";

export const PrivateRoutes = () => {
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();
  return (
    <div>
      {token ? (
        <Outlet />
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </div>
  );
};
