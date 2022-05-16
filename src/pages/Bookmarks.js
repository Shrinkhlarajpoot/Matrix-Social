import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sidebar, SuggestedUsers } from "../components";
import { Loader } from "../components/Loader/Loader";
import { getPosts, PostCard } from "../features/post";
import { getBookmarks } from "../features/user";
export const Bookmarks = () => {
  const { token } = useSelector((state) => state.auth);
  const { bookmarks, isLoading } = useSelector((state) => state.user);
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookmarks(token));
    dispatch(getPosts());
  }, [dispatch, token]);
  const bookmarkedPosts = posts.filter((dbPost) =>
    bookmarks.find((bookmark) => bookmark === dbPost._id)
  );
  return (
    <div className="grid grid-cols-[1fr_2fr_1fr] dark:bg-lightbg bg-lightthemebg ">
      <Sidebar />
      <div className="border-x border-secondary flex flex-col ">
        <div className="h-16 sticky top-0 z-10  pt-4 px-8 dark:text-terniarycolor uppercase border-b border-secondary  bg-lightthemebg2 text-lightthemetext dark:bg-darkbg1 ">
          Bookmarks
        </div>
        <div className="mb-4">
          {isLoading ? (
            <Loader />
          ) : bookmarkedPosts?.length ? (
            [...bookmarkedPosts]
              .reverse()
              .map((bookmark) => (
                <PostCard post={bookmark} key={bookmark._id} />
              ))
          ) : (
            <div className="text-center p-5 dark:text-terniarycolor lightthemetext">
              No Bookmark
            </div>
          )}
        </div>
      </div>
      <SuggestedUsers />
    </div>
  );
};
