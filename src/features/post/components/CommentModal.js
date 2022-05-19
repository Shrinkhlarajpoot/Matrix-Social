import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserAvatar } from "../../../components";
import { addComment, editComment } from "../postSlice";

export const CommentModal = ({
  setShowCommentModal,
  post,
  commentAlreadyExist,
  postId,
  setShowCommentOption,
}) => {
  const { users } = useSelector((state) => state.user);
  const { user, token } = useSelector((state) => state.auth);
  const [commentInput, setCommentInput] = useState("");
  const newCommentRef = useRef();
  const dispatch = useDispatch();
  const commentId = commentAlreadyExist?._id;
  const postUser = users?.find((user) => user?.username === post?.username);
  const submitHandler = (e) => {
    e.preventDefault();
    commentAlreadyExist
      ? dispatch(
          editComment({
            token,
            commentData: { commentInput },
            postId,
            commentId,
          })
        )
      : dispatch(
          addComment({
            token,
            commentData: { commentInput },
            postId: post._id,
          })
        );
        if(setShowCommentModal){
    setShowCommentModal(false);
        }
    setCommentInput("");
    newCommentRef.current.innerText = "";
  };
  useEffect(() => {
    if (commentAlreadyExist) {
      (newCommentRef.current.innerText = commentAlreadyExist.commentInput),
        setCommentInput(commentAlreadyExist.comment);
    }
  }, [commentAlreadyExist]);
return (
    <div
      className="bg-[#00000080] top-0 left-0 fixed w-full h-full  flex justify-center items-center"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="border dark:bg-darkbg bg-lightthemebg2 dark:bg-darkbg1  border-primary  flex flex-col py-2 px-3 relative rounded xl:w-1/2 md:w-2/3 w-96   ">
        <span
          class="material-icons-outlined absolute top-2 right-3 text-primary cursor-pointer"
          onClick={() => {
            setShowCommentModal && setShowCommentModal(false);
            setShowCommentOption && setShowCommentOption(false);
          }}
        >
          cancel
        </span>

        <h2 className="text-primary pl-3 pb-3">Replying to</h2>
        <div className="grid grid-cols-[4rem_1fr] text-sm bg-darkbg  bg px-3 py-1 cursor-pointer dark:text-terniarycolor text-lightthemetext">
          <UserAvatar user={postUser} />
          <div className="flex flex-col">
            <span>{post?.fullName}</span>
            <span className="text-secondary">@{post?.username}</span>
          </div>
        </div>
        <div className="border-l-2 border-primary h-4 ml-8 "></div>
        <div className="grid grid-cols-[4rem_1fr] text-sm bg-darkbg  bg px-3 py-1 cursor-pointer dark:text-terniarycolor text-lightthemetext">
          <UserAvatar user={user} />
          <div className="flex flex-col">
            <span>{user?.fullName}</span>
            <span className="text-secondary">@{user?.username}</span>
          </div>
        </div>
        <form onSubmit={(e) => submitHandler(e)}>
          <div
            ref={newCommentRef}
            role="textbox"
            placeholder="Reply..."
            contentEditable="true"
            value={commentInput}
            className="w-full break-all  outline-none  dark:text-secondary text-lightthemetext text-sm mb-1 mt-4 pl-2 "
            onInput={(e) => setCommentInput(e.currentTarget.textContent)}
          ></div>
          <button
            className="float-right px-4 py-1 bg-primary text-terniarycolor rounded-full  border-none  my-2  disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={
              !commentInput?.trim() ||
              (commentAlreadyExist &&
                commentInput?.trim() === commentAlreadyExist?.comment)
            }
            type="submit"
          >
            {commentAlreadyExist ? "Save" : "Reply"}
          </button>
        </form>
      </div>
    </div>
  );
};
