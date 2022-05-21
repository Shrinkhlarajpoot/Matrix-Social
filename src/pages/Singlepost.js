import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { SearchBar, Sidebar, SuggestedUsers, UserAvatar } from "../components";
import { Loader } from "../components/Loader/Loader";
import toast from "react-hot-toast";
import {
  CommentCard,
  dislikePost,
  getSinglePost,
  likePost,
  PostOptionsModal,
  addComment,
  LikesModal,
} from "../features/post";
import {
  addBookmark,
  getAllUsers,
  removeBookmark,
  toggleTheme,
} from "../features/user";
import { useclcikoutside } from "../hooks/useclickoutside";
import { getPostDate, likebyloggedUser, postInBookmarks } from "../utils";
export const Singlepost = () => {
  const { postId } = useParams();
  const {
    posts,
    isLoading,
    singlepost: currentPost,
  } = useSelector((state) => state.post);
  const { users, bookmarks, darkTheme } = useSelector((state) => state.user);
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [showpostOptions, setShowPostOptions] = useState(false);
  const newCommentRef = useRef();
  const navigate = useNavigate();
  const postRef = useRef();
  const [likesModal, setLikesModal] = useState(false);
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
    <div className="grid grid-cols-[1fr] sm:grid-cols-[7rem_1fr]  xl:grid-cols-[20rem_1fr_20rem]  bg-lightthemebg dark:bg-lightbg   lg:grid-cols-[20rem_1fr] lg:w-[98%] lg:m-auto pb-20  active_height">
      <Sidebar />
      <div className="border-x border-secondary flex flex-col content-start w-100">
        <div className="h-16 sticky top-0 z-10  py-1 px-10 dark:text-terniarycolor uppercase border-b border-terniarycolor  bg-lightthemebg2 text-lightthemetext dark:bg-darkbg1 flex justify-between items-center">
          <div className="flex">
            <span
              class="material-icons-outlined pr-2 cursor-pointer"
              onClick={() => navigate(-1)}
            >
              arrow_back
            </span>
            Post
          </div>
          <span
            class="material-icons text-primary text-3xl cursor-pointer "
            onClick={() =>
              dispatch(toggleTheme(darkTheme === "dark" ? "light" : "dark"))
            }
          >
            {" "}
            {darkTheme === "dark" ? "dark_mode" : "light_mode"}
          </span>
        </div>

        <div className="w-100 xl:hidden block">
          <SearchBar />
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {currentPost !== null ? (
              <>
                <div
                  className="grid sm:grid-cols-[4rem_1fr] sm:text-sm text-xs  border-b bg-darkbg border-secondary bg p-3 cursor-pointer dark:text-terniarycolor text-lightthemetext"
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
                      <div className="flex items-center gap-1 flex-wrap">
                        <span className="font-bold tracking-wide">
                          {currentPost?.fullName}
                        </span>
                        <span className="text-secondary">
                          @{currentPost?.username}.
                        </span>
                        <span className="text-secondary ml-2">
                          {getPostDate(currentPost?.createdAt)}
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
                    <div className="break-all mb- pr-1">{currentPost?.content}</div>
                    <div className="flex  mt-4 justify-between pt-4">
                      <div className="flex flex-col">
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
                      <span
            class="material-icons-outlined py-1 px-2 pr-2 hover:rounded-full text-md hover:text-primary  "
            onClick={(e) => {
              e.stopPropagation();
              toast.success("Link copied");
            }}
          >
            share
          </span>
                    </div>
                  </div>
                    <div>
                  
                        </div> {currentPost?.likes?.likedBy?.length > 0 ? (
                          <div
                            className="text-xs hover:text-primary my-2 "
                            onClick={(e) => {
                              e.stopPropagation();
                              setLikesModal(true);
                            }}
                          >
                            {`Liked By ${currentPost?.likes?.likedBy[0]?.fullName}`}
                            {currentPost?.likes?.likedBy?.length > 1 ? (
                              <span>{` & ${
                                currentPost?.likes?.likedBy?.length - 1
                              } others`}</span>
                            ) : null}
                          </div>
                        ) : null}
                </div>

                <div
                  className={`grid sm:grid-cols-[4rem_1fr] sm:text-sm text-xs  border-b bg-darkbg border-secondary bg p-3 cursor-pointer dark:text-terniarycolor text-lightthemetext
        
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
                      className="w-full break-all  outline-none text-lighthemetext dark:text-terniarycolor text-lightthemetext text-sm mb-1 mt-2 sm:mt-0 pr-1 sm:pr-0 outline-none grow bg-lightthemebg  dark:bg-lightbg  "
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

      <div className="hidden xl:block">
        <SearchBar />
        <SuggestedUsers />
      </div>
      {likesModal ? (
        <LikesModal post={currentPost} setLikesModal={setLikesModal} />
      ) : null}
    </div>
  );
};
