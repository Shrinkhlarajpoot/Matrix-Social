import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSort } from "../../features/post";
import { useclcikoutside } from "../../hooks/useclickoutside";

export const SortBar = () => {
  const [showSortModal, setShowSortModal] = useState(false);
  const filterRef = useRef();
  const dispatch = useDispatch();
  const { activeSort } = useSelector((state) => state.post);
  useclcikoutside(filterRef, setShowSortModal);
   return (
    <div className="" ref={filterRef}  >
      <div className="  h-16 pt-4 px-8 dark:text-terniarycolor uppercase border  bg-lightthemebg2 text-lightthemetext dark:bg-darkbg1 flex justify-between px-4  ">
        <div className="text-primary">{activeSort.toUpperCase()}...</div>
        <div className="relative">
        <span
          class=" relative material-icons-outlined hover:text-primary cursor-pointer"
          onClick={() => setShowSortModal(!showSortModal)}
        >
          tune
        </span>
  
   
      {showSortModal ? (
        <div
          className="absolute right-8 top-3  w-fit rounded py-1 px-2 border my-2 dark:bg-lightbg bg-lightthemebg2 text-lightthemetext dark:text-terniarycolor"
         
        >
          <button
            className={`px-1 cursor-pointer hover:text-primary flex items-center ${activeSort==="Trending"?"text-primary":""}`}
            role="button"
            onClick={() => {
              dispatch(setActiveSort("Trending"));
            }}
          >
            <span class="material-icons modal_icon  py-1 px-2  text-base ">
              trending_up
            </span>
            Trending
          </button>
          <button
            className={`px-1 cursor-pointer hover:text-primary flex items-center ${activeSort==="Latest"?"text-primary":""}`}
            onClick={() => {
              dispatch(setActiveSort("Latest"));
            }}
          >
            <span class="material-icons modal_icon  py-1 px-2  text-base hover:text-primary">
              arrow_upward
            </span>
            Latest
          </button>
          <button
            className={`px-1 cursor-pointer hover:text-primary flex items-center ${activeSort==="Oldest"?"text-primary":""}`}
            onClick={() => {
              dispatch(setActiveSort("Oldest"));
            }}
          >
            <span class="material-icons modal_icon  py-1 px-2  text-base hover:text-primary">
              arrow_downward
            </span>
            Oldest
          </button>
        </div>
       
      
      ) : null}
      </div>
      </div>
    
    </div>
  );
};
