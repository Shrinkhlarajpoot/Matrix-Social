import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SearchBar, Sidebar, SortBar, SuggestedUsers } from "../components";
import { Loader } from "../components/Loader/Loader";
import { logoutHandler } from "../features/auth";
import { getPosts, PostCard, PostInput, setActiveSort } from "../features/post";
import { getAllUsers, toggleTheme } from "../features/user";
import { sortByDate } from "../utils";

export const Home = () => {
  const dispatch = useDispatch();
  let { posts, isLoading, activeSort } = useSelector((state) => state.post);
  let { darkTheme } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getPosts());
    dispatch(getAllUsers());
  }, [dispatch]);

  const navigate = useNavigate();
  const sortedPost = sortByDate(posts, activeSort);

  return (
    <div className="grid grid-cols-[1fr] sm:grid-cols-[7rem_1fr]  xl:grid-cols-[20rem_1fr_20rem]  bg-lightthemebg dark:bg-lightbg   lg:grid-cols-[20rem_1fr]  lg:m-auto -z-10 active_height pb-20 ">
      <Sidebar />

      <div className="border-x border-secondary flex flex-col w-100 ">
        <div className="h-16 sticky top-0  py-1 px-10 dark:text-terniarycolor uppercase border-b border-secondary  bg-lightthemebg2 text-lightthemetext dark:bg-darkbg1 flex justify-between items-center ">
          <span>Home</span>

          <span
            class="material-icons text-primary text-3xl cursor-pointer "
            onClick={() =>
              dispatch(toggleTheme(darkTheme === "dark" ? "light" : "dark"))
            }
          >
            {" "}
            {darkTheme === "dark" ? "dark_mode" : "light_mode"}
          </span>
        </div>
        <div className="w-100 xl:hidden block">
          <SearchBar />
        </div>
      

        <PostInput />
        <SortBar />
        <div className="mb-4">
          {isLoading ? (
            <Loader />
          ) : sortedPost?.length ? (
            [...sortedPost]
              .reverse()
              .map((post) => <PostCard post={post} key={post._id} />)
          ) : (
            <div className="text-center p-4  dark:text-terniarycolor lightthemetext">
              No Posts
            </div>
          )}
        </div>
      </div>

      <div className="hidden xl:block">
        <SearchBar />
        <SuggestedUsers />
        <p>HDHDHHDHDHD</p>
      </div>
    </div>
  );
};
