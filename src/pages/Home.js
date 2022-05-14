import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components";
import { Loader } from "../components/Loader/Loader";
import { logoutHandler } from "../features/auth";
import { getPosts, PostCard, PostInput } from "../features/post";
import { getAllUsers } from "../features/user";

export const Home = () => {
  const dispatch = useDispatch();
  let { posts, isLoading } = useSelector((state) => state.post);
  let {darkTheme}=useSelector((state)=>state.user)
   useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
   useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-[1fr_2fr_1fr]  bg-lightthemebg dark:bg-lightbg">
      <Sidebar />
      <div className="border-x border-secondary flex flex-col ">
        <div className="h-16 sticky top-0 z-10  pt-4 px-8 dark:text-terniarycolor uppercase border-b border-secondary  bg-lightthemebg2 text-lightthemetext dark:bg-darkbg1 ">
          Home
        </div>
        <PostInput />
        <div className="mb-4">
          {isLoading ? (
            <Loader />
          ) : posts?.length ? (
            [...posts]
              .reverse()
              .map((post) => <PostCard post={post} key={post._id} />)
          ) : (
            <div>No Posts</div>
          )}
        </div>
      </div>
    </div>
  );
};
       
