import "../styles.css";
import { UserAvatar } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { createPost, editPost } from "../postSlice";
import { useRef, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { uploadImage } from "../../../utils";


export const PostInput = ({}) => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const newPostRef = useRef();
  const { token, user} = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);
  const {isLoading}=useSelector((state)=>state.post);
  const dispatch = useDispatch();
  const submitPost = async (e) => {
    e.preventDefault();
    if (image) {
      const resp = await uploadImage(image);
      dispatch(
        createPost({
          input,
          image: resp.url,
          imageAlt: resp.original_filename,
          token,
          user,
        })
      );
    } else
      dispatch(createPost({ input, image: "", imageAlt: "", token, user }));
    setInput("");
    setImage(null);
    newPostRef.current.innerText = "";
  };

  const currentUser = users?.find((user1) => user1.username === user.username);
  return (
    <div className="grid sm:grid-cols-[4rem_1fr] p-3 border-b border-secondary text-sm w-100 grid-cols-[1fr]">
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
        {image ? (
          <div className="relative w-100 m-auto">
            <img
              src={URL.createObjectURL(image)}
              className="w-100 max-h-72 rounded-md m-auto mt-2"
              alt="demo"
            />
            <button
              type="button"
              className="absolute w-100 top-4 left-4 text-lg text-primary"
              onClick={() => setImage(null)}
            >
              <span class="material-icons-outlined">cancel</span>
            </button>
          </div>
        ) : null}
        <div className="self-end flex items-center ">
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
          <button
            className="self-end px-4 py-1 bg-primary text-terniarycolor rounded-full  border-none  my-4 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!input.trim() && !image}
            type="submit"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};
