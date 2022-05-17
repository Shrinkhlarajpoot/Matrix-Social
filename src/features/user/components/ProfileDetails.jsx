import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  EditprofileModal,
  FollowinglistModal,
  FollowlistModal,
  getAllUsers,
  unfollowUser,
  followUser,
} from "..";
import { Loader } from "../../../components/Loader/Loader";
import { logoutHandler } from "../../auth";
export const ProfileDetails = () => {
  const { username } = useParams();
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.post);
  const { users, isLoading } = useSelector((state) => state.user);
  const [editModal, setEditModal] = useState(false);
  const [followModal, setFollowModal] = useState(false);
  const [followingModal, setFollowingModal] = useState(false);
  const navigate = useNavigate();
  const currentUser = users?.find((user1) => user1.username === username);
  const currentUserPosts = posts?.filter((post) => post.username === username);
  const userAlreadyFollowing = currentUser?.followers?.find(
    (follower) => follower?.username === user?.username
  );
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div>
      <div className="h-fit sticky top-0 z-10  py-6  px-8 dark:text-terniarycolor uppercase border-b border-secondary  bg-lightthemebg2 text-lightthemetext dark:bg-darkbg1 ">
        <div className="flex justify-between">
          <div className="flex">
            {isLoading ? (
              <div className="w-28 h-28 rounded-full mr-8 border-2 ">
                <Loader />
              </div>
            ) : currentUser?.profileImage ? (
              <img
                src={currentUser?.profileImage}
                className="rounded-full w-28 h-28 border-2 mr-8"
              ></img>
            ) : (
              <div className="rounded-full w-28 h-28 mr-8 bg-primary flex justify-center items-center text-4xl">
                {currentUser?.fullName
                  ?.split(" ")
                  .map((item) => item[0].toUpperCase())
                  ?.join("")}
              </div>
            )}

            <div className="flex flex-col capitalize">
              <div className="text-primary">{currentUser?.fullName}</div>
              <div className="text-sm text-secondary pb-2 ">
                @{currentUser?.username}
              </div>
              <div className="pb-2 text-sm">
                {currentUser?.bio || `Hello ,This is ${currentUser?.fullName}`}
              </div>
              <div className="flex items-center ">
                <span class="material-icons-outlined text-secondary pb-2 ">
                  language
                </span>
                <a
                  href={currentUser?.website || "https://www.google.com/ "}
                  target="_blank"
                  className="text-secondary pl-1 mb-2 pointer-cursor text-sm mb-2  hover:text-primary lowercase"
                >
                  {currentUser?.website?.slice(11) || "https://www.google.com/"}
                </a>
              </div>
              <div className="flex  font-bold text-sm pb-4 ">
                <span
                  className="hover:text-primary cursor-pointer text-bold"
                  onClick={() => setFollowModal(true)}
                >
                  {currentUser?.followers?.length} Followers
                </span>
                <span
                  className="px-3 text-sm hover:text-primary cursor-pointer"
                  onClick={() => setFollowingModal(true)}
                >
                  {currentUser?.following?.length} Followings
                </span>
                <span className="hover:text-primary cursor-pointer">
                  {currentUserPosts?.length} Posts
                </span>
              </div>
            </div>
          </div>
          {user?.username === currentUser?.username ||
          !currentUser?.username ? (
            <div className="flex h-8 ">
              {currentUser?.username ? (
                <div
                  className="capitalize border px-4 py-1 mx-1 border border-primary text-sm rounded-full cursor-pointer hover:bg-primary w-fit h-fit"
                  onClick={() => setEditModal(true)}
                >
                  Edit Profile
                </div>
              ) : null}
              <span
                class="material-icons-outlined cursor-pointer mt-1 px-1 hover:text-primary"
                onClick={() => {
                  dispatch(logoutHandler()), navigate("/logout");
                }}
              >
                logout
              </span>
            </div>
          ) : (
            <div
              className={`capitalize border px-4 py-1 mx-1 border border-primary rounded-full cursor-pointer  h-8 ${
                userAlreadyFollowing ? "border border-primary" : "bg-primary"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                userAlreadyFollowing
                  ? dispatch(
                      unfollowUser({
                        token,
                        followUserId: currentUser._id,
                      })
                    )
                  : dispatch(
                      followUser({ token, followUserId: currentUser._id })
                    );
              }}
            >
              {userAlreadyFollowing ? "Unfollow" : "Follow"}
            </div>
          )}
        </div>
      </div>

      {editModal ? <EditprofileModal setEditModal={setEditModal} /> : null}
      {followModal ? (
        <FollowlistModal
          setFollowModal={setFollowModal}
          currentUser={currentUser}
        />
      ) : null}
      {followingModal ? (
        <FollowinglistModal
          setFollowingModal={setFollowingModal}
          currentUser={currentUser}
        />
      ) : null}
    </div>
  );
};
