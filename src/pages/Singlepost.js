import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Sidebar, SuggestedUsers, UserAvatar } from "../components";
import { Loader } from "../components/Loader/Loader";
import {
  CommentCard,
  dislikePost,
  getSinglePost,
  likePost,
  PostOptionsModal,
  addComment,
} from "../features/post";
import { addBookmark, getAllUsers, removeBookmark } from "../features/user";
import { useclcikoutside } from "../hooks/useclickoutside";
import { likebyloggedUser, postInBookmarks } from "../utils";
export const Singlepost = () => {
  const { postId } = useParams();
  const {
    posts,
    isLoading,
    singlepost: currentPost,
  } = useSelector((state) => state.post);
  const { users, bookmarks } = useSelector((state) => state.user);
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [showpostOptions, setShowPostOptions] = useState(false);
  const newCommentRef = useRef();
  const navigate = useNavigate();
  const postRef = useRef();
  useEffect(() => {
    dispatch(getSinglePost(postId));
    dispatch(getAllUsers());
  }, [dispatch, posts, postId]);

  const [commentInput, setCommentInput] = useState("");
  useclcikoutside(postRef, setShowPostOptions);
  const currentpostUser = users?.find(
    (user1) => user1?.username === currentPost?.username
  );
  const focusInput = () => {
    newCommentRef.current && newCommentRef.current.focus();
  };
  const loggedUser = users?.find((user1) => user1.username === user.username);
  const postInBookmark = postInBookmarks(bookmarks, currentPost?._id);

  return (
    <div className="grid grid-cols-[1fr_2fr_1fr]  bg-lightthemebg dark:bg-lightbg">
      <Sidebar />
      <div className="border-x border-secondary flex flex-col content-start">
        <div className="h-16 sticky top-0 z-10  pt-4 px-8 dark:text-terniarycolor uppercase border-b border-terniarycolor  bg-lightthemebg2 text-lightthemetext dark:bg-darkbg1 flex content-center ">
          <span
            class="material-icons-outlined pr-2 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            arrow_back
          </span>
          Post
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {currentPost !== null ? (
              <>
                <div
                  className="grid grid-cols-[4rem_1fr] text-sm border-b bg-darkbg border-secondary bg p-3 cursor-pointer dark:text-terniarycolor text-lightthemetext"
                  ref={postRef}
                >
                  <div
                    onClick={() =>
                      navigate(`/profile/${currentPost?.username}`)
                    }
                  >
                    <UserAvatar user={currentpostUser} />
                  </div>
                  <div className="flex flex-col gap1">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-1">
                        <span className="font-bold tracking-wide">
                          {currentPost?.fullName}
                        </span>
                        <span className="text-secondary">
                          @{currentPost?.username}
                        </span>
                      </div>
                      <div className="relative">
                        <span
                          class="material-icons-outlined modal_icon px-2 py-1 hover:rounded-full hover:bg-darkbg text-base hover:text-primary"
                          onClick={() => setShowPostOptions(!showpostOptions)}
                        >
                          more_vert
                        </span>
                        {showpostOptions ? (
                          <PostOptionsModal
                            post={currentPost}
                            setShowPostOptions={setShowPostOptions}
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="break-all mb-2">{currentPost?.content}</div>
                    <div className="flex gap-6 mt-4 justify-around pt-4">
                      <div className="flex items-center">
                        <span
                          class={`material-icons-outlined py-1 px-2 hover:rounded-full  text-md hover:text-primary ${
                            likebyloggedUser(currentPost, user)
                              ? "text-red"
                              : null
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            likebyloggedUser(currentPost, user)
                              ? dispatch(
                                  dislikePost({ token, _id: currentPost._id })
                                )
                              : dispatch(
                                  likePost({ token, _id: currentPost._id })
                                );
                          }}
                        >
                          thumb_up_off_alt
                        </span>
                        {currentPost?.likes?.likeCount > 0 &&
                          currentPost?.likes?.likeCount}
                      </div>
                      <div className="flex items-center">
                        <span
                          class="material-icons  py-1  pl-3 px-2  text-center hover:rounded-full  text-md hover:text-primary "
                          onClick={focusInput}
                        >
                          forum
                        </span>
                        {currentPost?.comments?.length > 0 &&
                          currentPost?.comments?.length}
                      </div>

                      <span
                        class={`material-icons-outlined  py-1 px-2 hover:rounded-full text-md hover:text-primary ${
                          postInBookmark ? "text-primary" : null
                        }`}
                        onClick={() => {
                          postInBookmark
                            ? dispatch(
                                removeBookmark({ token, _id: currentPost._id })
                              )
                            : dispatch(
                                addBookmark({ token, _id: currentPost._id })
                              );
                        }}
                      >
                        {postInBookmark ? "bookmark" : "bookmark_border"}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={`grid grid-cols-[4rem_1fr] p-3 border text-sm 
        
      `}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div
                    className="cursor-pointer"
                    onClick={() => navigate(`/profile/${loggedUser?.username}`)}
                  >
                    <UserAvatar user={loggedUser} />
                  </div>
                  <form
                    className="flex flex-col"
                    onSubmit={(e) => {
                      e.preventDefault();

                      dispatch(
                        addComment({
                          token,
                          commentData: { commentInput },
                          postId: currentPost?._id,
                        })
                      ),
                        setCommentInput("");
                    }}
                  >
                    <input
                      type="text"
                      ref={newCommentRef}
                      placeholder="Write your comment..."
                      value={commentInput}
                      onChange={(e) => setCommentInput(e.target.value)}
                      className="w-full break-all  outline-none text-terniarycolor dark:text-terniarycolor text-lightthemetext text-sm mb-1 outline-none grow bg-lightthemebg  dark:bg-lightbg  "
                    ></input>
                    <button
                      className="self-end px-4 py-1 bg-primary text-terniarycolor rounded-full  border-none  my-4 disabled:opacity-50 disabled:cursor-not-allowed"
                      type="submit"
                      disabled={!commentInput.trim()}
                    >
                      Post
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <div className="text-center p-4  dark:text-terniarycolor lightthemetext">
                {" "}
                No Post Exits.
              </div>
            )}

            {currentPost?.comments?.length > 0
              ? [...currentPost.comments]
                  .reverse()
                  .map((comment) => (
                    <CommentCard
                      comment={comment}
                      key={comment._id}
                      postId={currentPost._id}
                    />
                  ))
              : null}
          </>
        )}
      </div>

      <SuggestedUsers />
    </div>
  );
};
