import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { PostInput, PostModal } from "../../features/post";
import { toggleTheme } from "../../features/user";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import Modal from "react-modal";

const customStyles = {
  content: {
    width: "100%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const Sidebar = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { darkTheme, users } = useSelector((state) => state.user);
  const [newPostModal, setNewPostModal] = useState(false);
  const dispatch = useDispatch();
  const currentUser = users.find((dbuser) => dbuser.username === user.username);
  return (
    <div className=" sm:sticky sm:h-screen  flex sm:flex-col sm:justify-between sm:py-6 sm:top-0 overflow-x-hidden overflow-y-auto fixed bottom-0 h-fit z-20 sm:z-0 ">
      <ul className="flex sm:flex-col sm:items-end sm:pr-12 sm:pr-2 sm:items-center sm:text-lg flex-row">
        <li>
          <div className="flex items-center font-bold text-primary text-2xl hidden sm:block xs:w-screen ">
            <img
              src="/assests/logoimg.png"
              className="h-12 cursor-pointer"
              onClick={() => navigate("/")}
            ></img>
            <span className="hidden lg:inline">MATRIX</span>
          </div>
        </li>
        <div className="sm:pr-2 sm:pr-0 flex justify-between sm:flex-col size  sm:bg-inherit dark:bg-darkbg1   py-1 bg-lightthemebg2 sm:dark:bg-lightbg px-2 sm:px-0 text-lightthemetext sm-text-inherit z-40 sm:z-0 ">
          <li className="flex  h-12  mt-4 dark:hover:text-primary hover:text-primary dark:text-terniarycolor text-lightthemetext ">
            <NavLink
              to="/home"
              className={`flex items-center text-lg ${({ isActive }) =>
                isActive ? "active" : null}`}
            >
              <span class="material-icons modal_icon text-md mr-3">home</span>
              <span className="hidden lg:block">Home</span>
            </NavLink>
          </li>
          <li className="flex  h-12   mt-4  dark:hover:text-primary hover:text-primary dark:text-terniarycolor text-lightthemetext ">
            <NavLink
              to="/explore"
              className={`flex items-center text-lg  ${({ isActive }) =>
                isActive ? "active" : null}`}
            >
              <span class="material-icons modal_icon text-md mr-1">tag</span>
              <span className="pl-2 hidden  lg:block">Explore</span>
            </NavLink>
          </li>
          <li className="flex  h-12   mt-4 dark:hover:text-primary hover:text-primary dark:text-terniarycolor text-lightthemetext ">
            <NavLink
              to="/bookmarks"
              className={`flex items-center text-lg ${({ isActive }) =>
                isActive ? "active" : null}`}
            >
              <span class="material-icons modal_icon text-md mr-1">
                bookmark
              </span>
              <span className="pl-2 hidden  lg:block">Bookmark</span>
            </NavLink>
          </li>
          <li className="flex  h-12   mt-4 dark:hover:text-primary hover:text-primary   dark:text-terniarycolor text-lightthemetext  ">
            <NavLink
              to={`/profile/${currentUser?.username}`}
              className={`flex items-center text-lg  ${({ isActive }) =>
                isActive ? "active" : null}`}
            >
              <span class="material-icons modal_icon text-md mr-1">
                account_circle
              </span>
              <span className="pl-2 hidden lg:block">Profile</span>
            </NavLink>
          </li>
          <div
            className="h-12 mt-4  w-15 h-15  bg-primary text-white  flex items-center justify-center rounded-full cursor-pointer border border-black sm:px-3 px-3 fixed bottom-20 right-1 sm:relative sm:bottom-0 "
            onClick={(e) => {
              e.preventDefault();
              setNewPostModal(true);
            }}
          >
            <span className="hidden lg:block ">Add Post</span>
            <span class="material-icons-outlined z-10 ">add</span>
          </div>
        </div>
      </ul>
      {newPostModal ? (
        <div className="bg-[#00000080] fixed top-0 left-0  w-screen h-screen  flex justify-center items-center opacity-100 z-50 backdrop-blur-sm">
          <div className="xl:w-1/2 md:w-2/3 w-5/6 bg-lightthemebg2 sm:mx-1  dark:bg-darkbg1 border border-primary rounded z-50 ">
            {" "}
            <PostModal
              setNewPostModal={setNewPostModal}
              newPostModal={newPostModal}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};
