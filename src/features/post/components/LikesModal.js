import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserAvatar } from "../../../components";
import { useclcikoutside } from "../../../hooks/useclickoutside";

export const LikesModal = ({ setLikesModal, post }) => {
  const navigate = useNavigate();
  const modalRef = useRef();
  useclcikoutside(modalRef,setLikesModal)

  return (
    <div
      className="bg-[#00000080] top-0 left-0 fixed w-screen h-screen flex justify-center items-center backdrop-blur-sm  z-40"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="border dark:bg-darkbg bg-lightthemebg2 dark:bg-darkbg1  border-primary flex flex-col py-2 px-3 relative rounded xl:w-1/2 md:w-2/3 w-5/6  " ref={modalRef}>
        <span
          class="material-icons-outlined absolute top-2 right-3 text-primary cursor-pointer"
          onClick={() => setLikesModal(false)}
        >
          cancel
        </span>

        <h2 className="text-primary pl-3 py-2">Liked By...</h2>

        {post?.likes?.likedBy?.length > 0 ? (
          post?.likes?.likedBy?.map((post1) => (
            <div
              className="grid grid-cols-[4rem_1fr] text-sm bg-darkbg  bg px-3 py-1 cursor-pointer dark:text-terniarycolor text-lightthemetext"
              key={post1.username}
            >
              <div
                onClick={() => {
                  navigate(`/profile/${post1.username}`);
                  setLikesModal(false);
                }}
              >
                <UserAvatar user={post1} />
              </div>
              <div className="flex flex-col">
                <span>{post1?.fullName}</span>
                <span className="text-secondary">@{post1?.username}</span>
              </div>
            </div>
          ))
        ) : (
          <div>No Like On this Post...</div>
        )}
      </div>
    </div>
  );
};
