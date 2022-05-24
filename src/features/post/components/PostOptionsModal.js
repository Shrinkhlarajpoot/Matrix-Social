import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { PostModal } from "..";
import { postInBookmarks } from "../../../utils";
import { followUser, getAllUsers, unfollowUser } from "../../user";
import { deletePost } from "../postSlice";
import { PostInput } from "./PostInput";
export const PostOptionsModal = ({ setShowPostOptions, post }) => {
  const [showNewPostModal, setNewPostModal] = useState(false);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.auth);
  const { bookmarks, users } = useSelector((state) => state.user);
  const postInBookmark = postInBookmarks(bookmarks, post._id);
  const currentUserToFollow = users.find(
    (user) => user.username === post.username
  );
  const userFollowingAlready = currentUserToFollow?.followers.find(
    (followeruser) => followeruser.username === user.username
  );

  return (
    <div className="absolute right-1.5 top-1.1 w-fit rounded py-1 px-2 border border-primary-300 my-2  dark:bg-lightbg bg-lightthemebg2">
      {user.username === post.username ? (
        <>
          <button
            className="px-1 cursor-pointer hover:text-primary flex items-center"
            role="button"
            onClick={(e) => {
              e.stopPropagation();
              setNewPostModal(true);
            }}
          >
            <span class="material-icons modal_icon  py-1 px-2  text-base ">
              edit
            </span>
            Edit
          </button>
          <button
            className="px-1 cursor-pointer hover:text-primary flex items-center "
            onClick={(e) => {
              e.stopPropagation();
              dispatch(deletePost({ _id: post._id, token }));
                if (pathname === `/post/${post.id}`) {
               navigate("/home");}
            
            }}
          >
            <span class="material-icons modal_icon  py-1 px-2  text-base hover:text-primary">
              delete
            </span>
            Delete
          </button>
        </>
      ) : (
        <button
          className="px-1 cursor-pointer hover:text-primary flex items-center"
          role="button"
          onClick={(e) => {
            e.stopPropagation();
            userFollowingAlready
              ? dispatch(
                  unfollowUser({ token, followUserId: currentUserToFollow._id })
                )
              : dispatch(
                  followUser({ token, followUserId: currentUserToFollow._id })
                );
          }}
        >
          <span class="material-icons modal_icon  py-1 px-2   text-base hover:text-primary">
            {userFollowingAlready ? "person_remove" : "person_add"}
          </span>
          <span>{userFollowingAlready ? "UnFollow" : "Follow"}</span>
        </button>
      )}

      {showNewPostModal ? (
        <div
          className="bg-[#00000080] top-0 left-0 fixed w-screen h-screen flex justify-center items-center rounded flex justify-center items-center backdrop-blur-sm z-40 "
          onClick={(e) => e.stopPropagation()}
        >
          <PostModal
            setNewPostModal={setNewPostModal}
            setShowPostOptions={setShowPostOptions}
            post={post}
          />
        </div>
      ) : null}
    </div>
  );
};
