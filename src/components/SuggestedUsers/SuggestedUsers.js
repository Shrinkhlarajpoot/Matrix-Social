import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { followUser } from "../../features/user";
import { UserAvatar } from "../UserAvatar/UserAvatar";

export const SuggestedUsers = () => {
  const { token, user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = users?.find((dbUser) => dbUser.username === user.username);
  const otherUsers = users?.filter(
    (dbUser) => dbUser?.username !== userData?.username
  );
  const filteredUsers = otherUsers?.filter(
    (eachuser) =>
      !userData?.following.find((item) => item?.username === eachuser?.username)
  );
  return (
    <>
      {filteredUsers.length ? (
        <div className="flex flex-col justify-center gap-4 m-4 px-4 py-3  rounded-md bg-lightthemebg2  dark:bg-darkbg1 h-max w-max z-0 sticky top-20 ">
          <div className="text-lg font-bold tracking-wide dark:text-terniarycolor text-lightthemetext ">
            Suggestions
          </div>
          {filteredUsers?.map((user) => (
            <div
              className="flex items-start gap-2 cursor-pointer"
              key={user?._id}
            >
              <div
                className="cursor-pointer"
                onClick={() => navigate(`/profile/${user?.username}`)}
              >
                <UserAvatar user={user} />
              </div>

              <div className="flex flex-col grow -mt-0.5">
                <span className="text-sm dark:text-terniarycolor text-lightthemetext ">
                  {user?.fullName}
                </span>
                <span className="text-sm text-secondary-mt-1 text-secondary  ">
                  {user?.username}
                </span>
              </div>

              <button
                className="bg-primary text-sm py-1 px-4 rounded-full  dark:text-terniarycolor text-lightthemetext  "
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(followUser({ token, followUserId: user._id }));
                }}
              >
                Follow
              </button>
            </div>
          ))}
        </div>
      ) : null}
   </>
  );
};
