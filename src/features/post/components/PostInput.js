import "../styles.css";
import { UserAvatar } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { createPost, editPost } from "../postSlice";
import { useRef, useState, useEffect } from "react";

export const PostInput = ({ post, setNewPostModal, setShowPostOptions }) => {
  const [input, setInput] = useState("");
  const newPostRef = useRef();
  const { token, user,isLoading } = useSelector((state) => state.auth);
  const {users} = useSelector((state)=>state.user)
 const dispatch = useDispatch();
  const submitPost = (e) => {
    e.preventDefault();
    if (post) {
      dispatch(editPost({ input, token, post }));
      setNewPostModal(false);
      setShowPostOptions(false);
    } else {
      dispatch(createPost({ input, token, user }));
    }
    setInput("");
    newPostRef.current.innerText = "";
  };
  useEffect(() => {
    if (post) newPostRef.current.innerText = post.content;
  }, [post]);
  const currentUser = users?.find((user1)=>user1.username===user.username)
  return (
    <div
      className={`grid grid-cols-[4rem_1fr] p-3 border-b border-secondary text-sm ${
        post ? "w-1/2 border dark:bg-darkbg bg-lightthemebg2 dark:bg-darkbg1  border-primary z-20": ""
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
          className="w-full break-all  outline-none text-terniarycolor dark:text-terniarycolor text-lightthemetext text-sm mb-1 "
          onInput={(e) => setInput(e.currentTarget.textContent)}
        ></div>
        <div className="self-end ">
          {post ? (
            <button
              className="px-4 py-1 bg-primary text-terniarycolor rounded-full  border-x my-4 mr-2 border-none"
              onClick={() => {
                setNewPostModal(false), setShowPostOptions(false);
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
