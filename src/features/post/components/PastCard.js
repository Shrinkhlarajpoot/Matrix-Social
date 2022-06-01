import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { UserAvatar } from "../../../components";
import { useclcikoutside } from "../../../hooks/useclickoutside";
import { getPostDate, likebyloggedUser, postInBookmarks, sharePost } from "../../../utils";
import { addBookmark, removeBookmark } from "../../user";
import { likePost, dislikePost } from "../postSlice";
import { CommentModal } from "./CommentModal";
import { LikesModal } from "./LikesModal";
import { PostOptionsModal } from "./PostOptionsModal";
import toast from "react-hot-toast";
export const PostCard = ({ post }) => {
  const [showpostOptions, setShowPostOptions] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const dispatch = useDispatch();
 const { token, user } = useSelector((state) => state.auth);
  const { bookmarks, users } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const postRef = useRef();
  const [likesModal, setLikesModal] = useState(false);
  const { username, fullName, content, _id, likes, id, createdAt } = post;
  const postInBookmark = postInBookmarks(bookmarks, post._id);
  const currentpostUser = users?.find(
    (user1) => user1.username === post.username
  );

  useclcikoutside(postRef, setShowPostOptions);

  return (
    <div
      className="grid sm:grid-cols-[4rem_1fr] sm:text-sm text-xs  border-b bg-darkbg border-secondary bg p-3 cursor-pointer dark:text-terniarycolor text-lightthemetext hover:dark:bg-darkbg1 hover:bg-lightthemebg2"
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
          <div className="flex items-center gap-1 flex-wrap ">
            <span className="font-bold tracking-wide mt-2 sm:mt-0">
              {fullName}
            </span>
            <span className="text-secondary mt-1.5 sm:mt-0">@{username} .</span>
            <span className="text-secondary sm:ml-2 mt-1.5 sm:mt-0">
              {getPostDate(createdAt)}
            </span>
          </div>
          <div className="relative z-0">
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
        {post?.image ? (
          <img
            src={post?.image}
            className="w-2/3 h-auto rounded-md  m-auto"
            alt={post?.imageAlt}
          ></img>
        ) : null}
        <div className="flex  mt-1 justify-between ">
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
          <span
            class="material-icons-outlined py-1 px-2 pr-2 hover:rounded-full text-md hover:text-primary  "
            onClick={(e) => {
              e.stopPropagation();
              sharePost(post.id)
            }}
          >
            share
          </span>
        </div>
        {likes?.likedBy?.length > 0 ? (
          <div
            className="text-xs hover:text-primary "
            onClick={(e) => {
              e.stopPropagation();
              setLikesModal(true);
            }}
          >
            {`Liked By ${likes?.likedBy[0]?.fullName}`}
            {likes?.likedBy?.length > 1 ? (
              <span>{` & ${likes?.likedBy?.length - 1} others`}</span>
            ) : null}
          </div>
        ) : null}
      </div>
      {showCommentModal ? (
        <CommentModal setShowCommentModal={setShowCommentModal} post={post} />
      ) : null}
      {likesModal ? (
        <LikesModal post={post} setLikesModal={setLikesModal} />
      ) : null}
    </div>
  );
};
