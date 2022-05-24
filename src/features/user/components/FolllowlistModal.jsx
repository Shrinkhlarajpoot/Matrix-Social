import { useRef } from "react";
import { UserAvatar } from "../../../components";
import { useclcikoutside } from "../../../hooks/useclickoutside";

export const FollowlistModal = ({ setFollowModal, currentUser }) => {
  const modalRef = useRef();
  useclcikoutside(modalRef, setFollowModal);
  return (
    <div className="bg-[#00000080] top-0 left-0 fixed w-full h-full  flex justify-center items-center backdrop-blur-sm z-40 ">
      <div
        className="border dark:bg-darkbg bg-lightthemebg2 dark:bg-darkbg1  border-primary  flex flex-col py-2 px-3 relative rounded xl:w-1/2 md:w-2/3 w-5/6 z-40  "
        ref={modalRef}
      >
        <span
          class="material-icons-outlined absolute top-2 right-3 text-primary cursor-pointer"
          onClick={() => setFollowModal(false)}
        >
          cancel
        </span>

        <h2 className="text-primary pl-3 pb-3">Followers</h2>
        {currentUser?.followers.length ? (
          <>
            {currentUser?.followers?.map((user) => (
              <div
                className="grid grid-cols-[4rem_1fr] text-sm bg-darkbg  bg p-3 cursor-pointer dark:text-terniarycolor text-lightthemetext"
                key={user._id}
              >
                <UserAvatar user={user} />
                <div className="flex flex-col">
                  <span>{user?.fullName}</span>
                  <span className="text-secondary">{user?.username}</span>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="text-center dark:text-terniarycolor text-lightthemetext">
            No Followers to Show
          </div>
        )}
      </div>
    </div>
  );
};
