import { UserAvatar } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { createPost, editPost } from "../postSlice";
import { useRef, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { uploadImage } from "../../../utils";
import { useclcikoutside } from "../../../hooks/useclickoutside";

export const PostModal = ({
  post,
  setNewPostModal,
  setShowPostOptions,
  newPostModal,
}) => {
  const [input, setInput] = useState(post||{});
  const [ image,setImage] = useState(null);
  const newPostRef = useRef();
  const modalRef = useRef();
  const { token, user, isLoading } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useclcikoutside(modalRef,setNewPostModal)
useEffect(() => {
    if (post) newPostRef.current.innerText = post.content||"";
  }, [post]);
  const currentUser = users?.find((user1) => user1.username === user.username);
 
 
  const submitPost = async (e) => {
    e.preventDefault();

    if (post) {
    if (image) {
        const resp = await uploadImage(image);
        dispatch(
          editPost({
            input: input?.content,
            image: resp.url,
            imageAlt: resp.original_filename,
            token,
            post,
          })
        );
      } else {
        dispatch(
          editPost({
            input: input?.content,
            image: input?.image,
            imageAlt: input?.imageAlt,
            token,
            post,
          })
        );
      }
      setShowPostOptions(false);
    } else {
     if (image) {
        const resp = await uploadImage(image);

        dispatch(
          createPost({
            input: input?.content,
            image: resp.url,
            imageAlt: resp.original_filename,
            token,
            user,
          })
        );
      } else {
        dispatch(
          createPost({
            input: input?.content,
            image: "",
            imageAlt: "",
            token,
            user,
          })
        );
      }
    }
   setInput("");
    setImage(null);
    setNewPostModal(false);
    newPostRef.current.innerText = "";
  };
 
return (
    <div
      className={`grid sm:grid-cols-[4rem_1fr] p-3 border-b border-secondary text-sm w-100 grid-cols-[1fr] ${
        post
          ? " border dark:bg-darkbg bg-lightthemebg2 dark:bg-darkbg1  border-primary  rounded xl:w-1/2 md:w-2/3 w-5/6 z-40 " 
          : ""
      }`}
      ref={modalRef}
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
          onInput={(e) =>
            setInput((prev) => ({
              ...prev,
              content: e.target.textContent,
            }))
          }
        ></div>
          {input?.image || image ? (
          <div className="relative w-100 m-auto">
            <img
              src={image ? URL.createObjectURL(image) : input?.image}
              className="w-100 max-h-52 rounded-md m-auto mt-2"
              alt={input?.imageAlt || image.name.split(".")[0]}
            />
            <button
              type="button"
              className="absolute w-100 top-2 left-1 text-primary"
              onClick={() =>
                input?.image
                  ? setInput((prev) => ({ ...prev, image: null }))
                  : setImage(null)
              }
            >
               <span class="material-icons-outlined">cancel</span>
            </button>
          </div>
        ) : null}
        <div className="self-end flex items-center">
        <label className="cursor">
            <input
              type="file"
              className="hidden"
              onChange={(e) =>
                Math.round(e.target.files[0].size / 1024000) > 1
                  ? toast.error("File size should not be more than 1MB")
                  : setImage(e.target.files[0])
              }
            ></input>
            <span class="material-icons-outlined mr-2 mt-1 text-primary cursor-pointer">
              image
            </span>
          </label>
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
            disabled={!input?.content?.trim() && !image}
            type="submit"
          >
            {post ? "Save" : "Post"}
          </button>
        </div>
      </form>
    </div>
  );
};