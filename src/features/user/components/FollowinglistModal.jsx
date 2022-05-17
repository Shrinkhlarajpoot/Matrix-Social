import { UserAvatar } from "../../../components";

export const FollowinglistModal = ({ setFollowingModal, currentUser }) => {
  return (
    <div className="bg-[#00000080] top-0 left-0 fixed w-full h-full z-30 flex justify-center items-center">
      <div className="w-1/3 border dark:bg-darkbg bg-lightthemebg2 dark:bg-darkbg1  border-primary z-20 flex flex-col py-2 px-3 relative">
        <span
          class="material-icons-outlined absolute top-2 right-3 text-primary cursor-pointer"
          onClick={() => setFollowingModal(false)}
        >
          cancel
        </span>

        <h2 className="text-primary pl-3 pb-3">Following</h2>
        {currentUser?.following.length ? (
          <>
            {currentUser?.following?.map((user) => (
              <div
                className="grid grid-cols-[4rem_1fr] text-sm bg-darkbg  bg p-3 cursor-pointer dark:text-terniarycolor text-lightthemetext"
                key={user?._id}
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
            No Following to Show
          </div>
        )}
      </div>
    </div>
  );
};
