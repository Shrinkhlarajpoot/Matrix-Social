import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SearchBar, Sidebar, SuggestedUsers } from "../components";
import { Loader } from "../components/Loader/Loader";
import { getPosts, PostCard } from "../features/post";
import { getAllUsers, ProfileDetails } from "../features/user";

export const Profile = () => {
  const { username } = useParams();
  const dispatch = useDispatch();

  const { posts, isLoading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getPosts());
  }, [dispatch]);

  const currentUserPosts = posts?.filter((post) => post.username === username);

  return (
    <div className="grid grid-cols-[1fr] sm:grid-cols-[7rem_1fr]  xl:grid-cols-[20rem_1fr_20rem]  bg-lightthemebg dark:bg-lightbg   lg:grid-cols-[20rem_1fr] lg:w-[98%] lg:m-auto pb-20 active_height">
      <Sidebar />

      <div className="border-x border-secondary flex flex-col"><ProfileDetails />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {currentUserPosts?.length ? (
              currentUserPosts?.map((post) => (
                <PostCard post={post} key={post._id} />
              ))
            ) : (
              <p className="text-center p-4  dark:text-terniarycolor lightthemetext">No posts to show.</p>
            )}
          </>
        )}
      </div>
      <div className="hidden xl:block">
        <SearchBar/>
      <SuggestedUsers />
      </div>
    </div>
  );
};
