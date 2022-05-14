import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sidebar } from "../components";
import { Loader } from "../components/Loader/Loader";
import { PostCard } from "../features/post";
import { getBookmarks} from "../features/user";

export const Bookmarks = () => {
 const {token} = useSelector((state)=>state.auth)
 const {bookmarks,isLoading}= useSelector((state)=>state.user);
 const dispatch = useDispatch()
 useEffect(() => {
    dispatch(getBookmarks(token));
  }, [dispatch,token]);
 return (
    <div className="grid grid-cols-[1fr_2fr_1fr] dark:bg-lightbg bg-lightthemebg">
    <Sidebar />
    <div className="border-x border-secondary flex flex-col ">
      <div className="h-16 bg-darkbg  sticky top-0 z-10 pt-4 px-8 text-terniarycolor uppercase border-b border-secondary dark:bg-darkbg1 bg-lightthemebg2 text-lightthemetext">
        Bookmarks
      </div>
    <div className="mb-4">
        {isLoading ? (
           <Loader />
        ) : bookmarks?.length ? (
          [...bookmarks]
            .reverse()
            .map((bookmark) => <PostCard post={bookmark} key={bookmark._id} />)
        ) : (
          <div className="text-center p-5 dark:text-terniarycolor lightthemetext">No Bookmark</div>
        )}
      </div>
    </div>
  </div>
  );
};
