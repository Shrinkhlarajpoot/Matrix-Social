import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { postInBookmarks } from "../../../utils";
import { followUser,getAllUsers,unfollowUser } from "../../user";
import { deletePost } from "../postSlice";
import { PostInput } from "./PostInput";
export const PostOptionsModal = ({ setShowPostOptions, post }) => {
  const [showNewPostModal, setNewPostModal] = useState(false);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.auth);
  const { bookmarks ,users} = useSelector((state) => state.user); 
 const postInBookmark = postInBookmarks(bookmarks, post._id);
 const currentUserToFollow = users.find((user)=>user.username===post.username);
const userFollowingAlready = currentUserToFollow?.followers.find((followeruser)=>followeruser.id===user.id);
return (
    <div className="absolute right-1.5 top-1.1 w-fit rounded py-1 px-2 border border-primary-300 my-2 z-10 dark:bg-lightbg bg-lightthemebg2">
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
            onClick={() => {
              if (pathname !== "/") {
                navigate("/");
                dispatch(deletePost({ _id: post._id, token }));
              }
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
          onClick={(e)=>{
            e.stopPropagation();
            userFollowingAlready?dispatch(unfollowUser({token,followUserId:currentUserToFollow._id})):dispatch(followUser({token,followUserId:currentUserToFollow._id}))
          }}
        >
          <span class="material-icons modal_icon  py-1 px-2   text-base hover:text-primary">
            {userFollowingAlready?"person_remove":"person_add"}
          </span>
          <span>{userFollowingAlready?"UnFollow":"Follow"}</span>
        </button>
      )}

      {showNewPostModal ? (
        <div
          className="bg-[#00000080] top-0 left-0 fixed w-full h-full z-30 flex justify-center items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <PostInput
            setNewPostModal={setNewPostModal}
            setShowPostOptions={setShowPostOptions}
            post={post}
          />
        </div>
      ) : null}
    </div>
  );
};
