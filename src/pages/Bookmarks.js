import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchBar, Sidebar, SuggestedUsers } from "../components";
import { Loader } from "../components/Loader/Loader";
import { getPosts, PostCard } from "../features/post";
import { getBookmarks, toggleTheme } from "../features/user";
export const Bookmarks = () => {
  const { token } = useSelector((state) => state.auth);
  const { bookmarks, isLoading,darkTheme } = useSelector((state) => state.user);
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
    <div className="grid grid-cols-[1fr] sm:grid-cols-[7rem_1fr]  xl:grid-cols-[20rem_1fr_20rem]  bg-lightthemebg dark:bg-lightbg   lg:grid-cols-[20rem_1fr]  lg:m-auto active_height mb-20">
      <Sidebar />
      <div className="border-x border-secondary flex flex-col w-100">
        <div className="h-16 z-10 sticky top-0   py-1 px-10 dark:text-terniarycolor uppercase border-b border-secondary  bg-lightthemebg2 text-lightthemetext dark:bg-darkbg1 flex justify-between items-center ">
        <span>Bookmarks</span>
        <span
        class="material-icons text-primary  text-3xl cursor-pointer "
        onClick={() => dispatch(toggleTheme(darkTheme==="dark"? "light":"dark"))}
      > {darkTheme==='dark' ? "dark_mode" : "light_mode"}</span>

      
        </div>
        <div className="w-100 xl:hidden block">
          <SearchBar />
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
      <div className="hidden xl:block">
        <SearchBar/>
      <SuggestedUsers />
      </div>
    </div>
  );
};
