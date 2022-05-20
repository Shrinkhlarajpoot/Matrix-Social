import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../postSlice";
import { CommentModal } from "./CommentModal";

export const CommentOptionsModal = ({
  setShowCommentOption,
  comment,
  postId,
}) => {
  const { token } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [showCommentModal, setShowCommentModal] = useState(false);
  const post = posts?.find((post1) => post1._id === postId);

  return (
    <div className="absolute right-4 top-8 w-fit rounded py-1 px-2 border border-primary-300 my-2  dark:bg-lightbg bg-lightthemebg2">
      <button
        className="px-1 cursor-pointer hover:text-primary flex items-center"
        role="button"
        onClick={(e) => {
          e.stopPropagation(), setShowCommentModal(true);
        }}
      >
        <span class="material-icons modal_icon  py-1 px-2  text-base ">
          edit
        </span>
        Edit
      </button>
      <button
        className="px-1 cursor-pointer hover:text-primary flex items-center "
        onClick={(e) => {
          e.stopPropagation(),
            dispatch(deleteComment({ token, commentId: comment._id, postId }));
        }}
      >
        <span class="material-icons modal_icon  py-1 px-2  text-base hover:text-primary">
          delete
        </span>
        Delete
      </button>
      {showCommentModal ? (
        <CommentModal
          setShowCommentModal={setShowCommentModal}
          setShowCommentOption={setShowCommentOption}
          commentAlreadyExist={comment}
          postId={postId}
          post={post}
        />
      ) : null}
    </div>
  );
};
