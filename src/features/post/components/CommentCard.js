import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserAvatar } from "../../../components";
import { useclcikoutside } from "../../../hooks/useclickoutside";
import { CommentOptionsModal } from "./CommentOptionsModal";

export const CommentCard = ({ comment, postId }) => {
  const { users } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);
  const loggedUser = users?.find((user1) => user1.username === user.username);
  const [showCommentOption, setShowCommentOption] = useState(false);
  const commentCardRef = useRef();
  const navigate = useNavigate();
  useclcikoutside(commentCardRef, setShowCommentOption);
  return (
    <div
      className="grid grid-cols-[4rem_1fr] text-sm border-b bg-darkbg border-secondary bg px-3 pb-6 pt-2  dark:text-terniarycolor text-lightthemetext relative"
      ref={commentCardRef}
    >
      <div
        className="cursor-pointer"
        onClick={() => navigate(`/profile/${comment.username}`)}
      >
        <UserAvatar user={comment?.profileImage ? comment : loggedUser} />
      </div>
      <div className="flex flex-col gap1">
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <span className="font-bold tracking-wide">{comment.fullName}</span>
            <span className="text-secondary">@{comment.username}</span>
          </div>
          <div className="relative">
            <span
              class="material-icons-outlined modal_icon px-2 py-1 hover:rounded-full hover:bg-darkbg text-base hover:text-primary cursor-pointer"
              onClick={() => setShowCommentOption(!showCommentOption)}
            >
              more_vert
            </span>
          </div>
        </div>
        <div className="break-all mb-2">
          {comment.inputComment || comment.commentInput}
        </div>
      </div>
      {showCommentOption ? (
        <CommentOptionsModal
          setShowCommentOption={setShowCommentOption}
          comment={comment}
          postId={postId}
        />
      ) : null}
    </div>
  );
};
