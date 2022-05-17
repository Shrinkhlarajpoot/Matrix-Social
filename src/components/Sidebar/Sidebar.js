import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toggleTheme } from "../../features/user";

import { UserAvatar } from "../UserAvatar/UserAvatar";
export const Sidebar = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { darkTheme, users } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const currentUser = users.find((dbuser) => dbuser.username === user.username);

  return (
    <div className="relative sticky h-screen  flex flex-col justify-between py-6 top-0 overflow-x-hidden overflow-y-auto w-40 mx-auto  pl-1">
      <span
        class="material-icons text-primary absolute top-4 right-4 text-3xl cursor-pointer "
        onClick={() => dispatch(toggleTheme(darkTheme ? false : true))}
      >
        {darkTheme ? "dark_mode" : "light_mode"}
      </span>

      <ul className="flex flex-col justify-center  mx-auto ">
        <li>
          <img
            src="/assests/logoimg.png"
            className="h-20 cursor-pointer"
            onClick={() => navigate("/")}
          ></img>
        </li>
        <li className="flex  h-12  mt-6 dark:hover:text-primary hover:text-primary dark:text-terniarycolor text-lightthemetext ">
          <NavLink
            to="/home"
            className={`flex items-center text-lg ${({ isActive }) =>
              isActive ? "active" : null}`}
          >
            <span class="material-icons modal_icon text-md mr-3 ">home</span>
            <span className=" ">Home</span>
          </NavLink>
        </li>
        <li className="flex  h-12   mt-6 dark:hover:text-primary hover:text-primary dark:text-terniarycolor text-lightthemetext ">
          <NavLink
            to="/explore"
            className={`flex items-center text-lg  ${({ isActive }) =>
              isActive ? "active" : null}`}
          >
            <span class="material-icons modal_icon text-md mr-1">tag</span>
            <span className="pl-2 ">Explore</span>
          </NavLink>
        </li>
        <li className="flex  h-12   mt-6 dark:hover:text-primary hover:text-primary dark:text-terniarycolor text-lightthemetext ">
          <NavLink
            to="/bookmarks"
            className={`flex items-center text-lg ${({ isActive }) =>
              isActive ? "active" : null}`}
          >
            <span class="material-icons modal_icon text-md mr-1">bookmark</span>
            <span className="pl-2 ">Bookmark</span>
          </NavLink>
        </li>
        <li className="flex  h-12   mt-6 dark:hover:text-primary hover:text-primary   dark:text-terniarycolor text-lightthemetext  ">
          <NavLink
            to={`/profile/${currentUser?.username}`}
            className={`flex items-center text-lg  ${({ isActive }) =>
              isActive ? "active" : null}`}
          >
            <span class="material-icons modal_icon text-md mr-1">
              account_circle
            </span>
            <span className="pl-2 ">Profile</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
