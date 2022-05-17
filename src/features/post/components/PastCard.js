import { useReducer, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserAvatar } from "../../../components";
import { useclcikoutside } from "../../../hooks/useclickoutside";
import { likebyloggedUser, postInBookmarks } from "../../../utils";
import { addBookmark, removeBookmark } from "../../user";
import { likePost, dislikePost } from "../postSlice";
import { CommentModal } from "./CommentModal";
import { PostOptionsModal } from "./PostOptionsModal";
export const PostCard = ({ post }) => {
  const [showpostOptions, setShowPostOptions] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  const { bookmarks, users } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const postRef = useRef();
  const { username, fullName, content, _id, likes, id } = post;
  const postInBookmark = postInBookmarks(bookmarks, post._id);
  const currentpostUser = users?.find(
    (user1) => user1.username === post.username
  );
  useclcikoutside(postRef, setShowPostOptions);

  return (
    <div
      className="grid grid-cols-[4rem_1fr] text-sm border-b bg-darkbg border-secondary bg p-3 cursor-pointer dark:text-terniarycolor text-lightthemetext"
      onClick={(e) => {
        e.stopPropagation();
        navigate(`/post/${id}`);
      }}
      ref={postRef}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/profile/${username}`);
        }}
      >
        <UserAvatar user={currentpostUser} />
      </div>
      <div className="flex flex-col gap1 gap-y-3 pb-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <span className="font-bold tracking-wide">{fullName}</span>
            <span className="text-secondary">@{username}</span>
          </div>
          <div className="relative">
            <span
              class="material-icons-outlined modal_icon px-2 py-1 hover:rounded-full hover:bg-darkbg text-base hover:text-primary"
              onClick={(e) => {
                e.stopPropagation();
                setShowPostOptions(!showpostOptions);
              }}
            >
              more_vert
            </span>
            {showpostOptions ? (
              <PostOptionsModal
                post={post}
                setShowPostOptions={setShowPostOptions}
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="break-all">{content}</div>
        <div className="flex gap-4 mt-1 justify-between ">
          <div className="flex items-center">
            <span
              class={`material-icons-outlined py-1 px-2 hover:rounded-full  text-md hover:text-primary ${
                likebyloggedUser(post, user) ? "text-red" : null
              }`}
              onClick={(e) => {
                e.stopPropagation();
                likebyloggedUser(post, user)
                  ? dispatch(dislikePost({ token, _id }))
                  : dispatch(likePost({ token, _id }));
              }}
            >
              thumb_up_off_alt
            </span>
            {likes.likeCount > 0 && likes.likeCount}
          </div>
          <div className="flex items-center ">
            <span
              class="material-icons  py-1 px-2  hover:rounded-full  text-md hover:text-primary "
              onClick={(e) => {
                e.stopPropagation();
                setShowCommentModal(true);
              }}
            >
              forum
            </span>
            <span>{post?.comments?.length || null}</span>
          </div>

          <span
            class={`material-icons-outlined  py-1 px-2 -pr-2 hover:rounded-full text-md hover:text-primary ${
              postInBookmark ? "text-primary" : null
            }`}
            onClick={(e) => {
              e.stopPropagation();
              postInBookmark
                ? dispatch(removeBookmark({ token, _id }))
                : dispatch(addBookmark({ token, _id }));
            }}
          >
            {postInBookmark ? "bookmark" : "bookmark_border"}
          </span>
        </div>
      </div>
      {showCommentModal ? (
        <CommentModal setShowCommentModal={setShowCommentModal} post={post} />
      ) : null}
    </div>
  );
};
