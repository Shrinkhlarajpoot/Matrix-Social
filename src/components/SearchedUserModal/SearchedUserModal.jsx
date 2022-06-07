import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchList } from "../../features/user";

import { UserAvatar } from "../UserAvatar/UserAvatar";

export const SearchedUserModal = () => {
  const { searchList } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-start gap-2 cursor-pointer dark:bg-lightbg bg-lightthemebg px-1 py-2 sm:w-72 w-56  ml-4 absolute border border-primary z-40 ">
      {searchList.length ? (
        searchList?.map((user) => (
          <div className="flex items-center gap-2 px-3 " key={user?.username}>
            <div
              className="cursor-pointer"
              onClick={() => {
                navigate(`/profile/${user?.username}`);
                dispatch(setSearchList(""));
              }}
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
          </div>
        ))
      ) : (
        <div className="text-secondary mx-auto">No Search User Found</div>
      )}
    </div>
  );
};
