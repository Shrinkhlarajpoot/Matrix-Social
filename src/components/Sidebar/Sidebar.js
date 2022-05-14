import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toggleTheme } from "../../features/user";

import { UserAvatar } from "../UserAvatar/UserAvatar";
export const Sidebar = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { darkTheme } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div className="relative sticky h-screen w-full flex flex-col justify-between py-6 px-4 top-0 overflow-x-hidden overflow-y-auto">
      <span
        class="material-icons text-primary absolute top-4 right-4 text-3xl cursor-pointer "
        onClick={() => dispatch(toggleTheme())}
      >
        {darkTheme ? "dark_mode" : "light_mode"}
      </span>

      <ul className="flex flex-col justify-center w-100 ">
        <li>
          <img
            src="./assests/logoimg.png"
            className="w-40 ml-10 cursor-pointer"
            onClick={() => navigate("/")}
          ></img>
        </li>
        <li className="flex  h-12  mt-6 hover:text-primary dark:text-terniarycolor text-lightthemetext">
          <NavLink
            to="/home"
            className={`flex items-center text-md pl-16 w-60  ${({
              isActive,
            }) => (isActive ? "active" : null)}`}
          >
            <span class="material-icons modal_icon text-md ">home</span>
            <span className="pl-2 ">Home</span>
          </NavLink>
        </li>
        <li className="flex  h-12   mt-6 hover:text-primary dark:text-terniarycolor text-lightthemetext">
          <NavLink
            to="/"
            className={`flex items-center text-md pl-16 w-60  ${({
              isActive,
            }) => (isActive ? "active" : null)}`}
          >
            <span class="material-icons modal_icon">tag</span>
            <span className="pl-2 ">Explore</span>
          </NavLink>{" "}
        </li>
        <li className="flex  h-12   mt-6 hover:text-primary dark:text-terniarycolor text-lightthemetext">
          <NavLink
            to="/bookmarks"
            className={`flex items-center text-md pl-16 w-60 ${({ isActive }) =>
              isActive ? "active" : null}`}
          >
            <span class="material-icons modal_icon">bookmark</span>
            <span className="pl-2 ">Bookmark</span>
          </NavLink>
        </li>
        <li className="flex  h-12   mt-6 hover:text-primary dark:text-terniarycolor text-lightthemetext">
          <NavLink
            to="/"
            className={`flex items-center text-md pl-16 w-60 ${({ isActive }) =>
              isActive ? "active" : null}`}
          >
            <span class="material-icons modal_icon">account_circle</span>
            <span className="pl-2 ">Profile</span>
          </NavLink>
        </li>
      </ul>

      <div className="text-primary flex flex-col p-2 border hover:border hover:border-primary cursor-pointer">
        <span className="flex items-center">
          <UserAvatar />
          {user?.fullName}
        </span>
        <span className="pl-10 text-secondary">@{user?.username}</span>
      </div>
    </div>
  );
};
