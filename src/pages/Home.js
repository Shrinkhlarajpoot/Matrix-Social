import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutHandler } from "../features/auth";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(logoutHandler(), navigate("/logout"));
        }}
      >
        Logout
      </button>
    </div>
  );
};
