import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Sidebar, SuggestedUsers } from "../components";
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
    <div className="grid grid-cols-[1fr_2fr_1fr]   bg-lightthemebg dark:bg-lightbg">
      <Sidebar />

      <div className="border-x border-secondary flex flex-col ">
        <ProfileDetails />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {currentUserPosts?.length ? (
              currentUserPosts?.map((post) => (
                <PostCard post={post} key={post._id} />
              ))
            ) : (
              <p className="p-4 text-center">No posts to show.</p>
            )}
          </>
        )}
      </div>
      <SuggestedUsers />
    </div>
  );
};
