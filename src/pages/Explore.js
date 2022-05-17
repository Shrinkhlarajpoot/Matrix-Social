import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sidebar, SuggestedUsers } from "../components";
import { Loader } from "../components/Loader/Loader";
import { getPosts, PostCard } from "../features/post";
export const Explore = () => {
  const { token } = useSelector((state) => state.auth);
  const { bookmarks } = useSelector((state) => state.user);
  const { posts, isLoading } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, token]);
  return (
    <div className="grid grid-cols-[1fr_2fr_1fr] dark:bg-lightbg bg-lightthemebg ">
      <Sidebar />
      <div className="border-x border-secondary flex flex-col ">
        <div className="h-16 sticky top-0 z-10  pt-4 px-8 dark:text-terniarycolor uppercase border-b border-secondary  bg-lightthemebg2 text-lightthemetext dark:bg-darkbg1 ">
          Explore
        </div>
        <div className="mb-4 ">
          {isLoading ? (
            <Loader />
          ) : posts?.length ? (
            [...posts]
              .reverse()
              .map((post) => <PostCard post={post} key={post._id} />)
          ) : (
            <div className="text-center p-4  dark:text-terniarycolor lightthemetext">
              No Posts
            </div>
          )}
        </div>
      </div>
      <SuggestedUsers />
    </div>
  );
};
