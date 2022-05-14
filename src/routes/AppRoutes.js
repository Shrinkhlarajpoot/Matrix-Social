import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login, Logout, Signup } from "../features/auth";


import { Bookmarks, Home, LandingPage } from "../pages";


import { PrivateRoutes } from "./PrivateRoutes";

export const AppRoutes = () => {
  const { token } = useSelector((state) => state.auth);
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        {!token ? (
          <>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </>
        ) : (
          <>
            <Route
              path="/login"
              element={<Navigate to="/home" replace />}
            ></Route>
            <Route
              path="/logout"
              element={<Navigate to="/home" replace />}
            ></Route>
            <Route
              path="/signup"
              element={<Navigate to="/home" replace />}
            ></Route>
          </>
        )}
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
        </Route>

        <Route element={<PrivateRoutes/>}>
          <Route path="/bookmarks" element={<Bookmarks/>}></Route>
        </Route>

      </Routes>
    </div>
  );
};
