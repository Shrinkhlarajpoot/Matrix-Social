import "../styles.css";
import { UserAvatar } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { createPost, editPost } from "../postSlice";
import { useRef, useState, useEffect } from "react";

export const PostInput = ({
  post,
  setNewPostModal,
  setShowPostOptions,
  newPostModal,
}) => {
  const [input, setInput] = useState("");
  const newPostRef = useRef();
  const { token, user, isLoading } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const submitPost = (e) => {
    e.preventDefault();
    if (post) {
      dispatch(editPost({ input, token, post }));
      setShowPostOptions(false);
    } else {
      dispatch(createPost({ input, token, user }));
    }
    if (newPostModal) {
      setNewPostModal(false);
    }
    setInput("");
    newPostRef.current.innerText = "";
  };
  useEffect(() => {
    if (post) newPostRef.current.innerText = post.content;
  }, [post]);
  const currentUser = users?.find((user1) => user1.username === user.username);
  return (
    <div
      className={`grid sm:grid-cols-[4rem_1fr] p-3 border-b border-secondary text-sm w-100 grid-cols-[1fr] ${
        post
          ? " border dark:bg-darkbg bg-lightthemebg2 dark:bg-darkbg1  border-primary  rounded xl:w-1/2 md:w-2/3 w-5/6 z-40 "
          : ""
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <UserAvatar user={currentUser} />
      <form className="flex flex-col" onSubmit={submitPost}>
        <div
          ref={newPostRef}
          role="textbox"
          placeholder="What's happening?"
          contentEditable="true"
          className="w-full break-all  outline-none dark:text-terniarycolor text-lightthemetext text-sm mb-1 mt-1 sm:mt-0 "
          onInput={(e) => setInput(e.currentTarget.textContent)}
        ></div>
        <div className="self-end ">
          {post || newPostModal ? (
            <button
              className="px-4 py-1 bg-primary text-terniarycolor rounded-full  border-x my-4 mr-2 border-none"
              onClick={(e) => {
                e.stopPropagation();
                setNewPostModal(false);
                if (setShowPostOptions) {
                  setShowPostOptions(false);
                }
              }}
            >
              Cancel
            </button>
          ) : null}
          <button
            className="self-end px-4 py-1 bg-primary text-terniarycolor rounded-full  border-none  my-4 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!input.trim() || (post && input.trim() === post.content)}
            type="submit"
          >
            {post ? "Save" : "Post"}
          </button>
        </div>
      </form>
    </div>
  );
};
