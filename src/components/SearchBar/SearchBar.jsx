import {  useRef, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchList } from "../../features/user";
import { useclcikoutside } from "../../hooks/useclickoutside";

import { debounceSearch } from "../../utils";

import { SearchedUserModal } from "../SearchedUserModal/SearchedUserModal";




export const SearchBar = () => {
const {searchterm} =useSelector((state)=>state.user);
const dispatch = useDispatch();

const [showSearchedModal,setShowSearchedModal] = useState(true);
const modalRef = useRef();
useclcikoutside(modalRef,setShowSearchedModal)
return (
  //sticky z-index:10
    <div className="top-4 z-0 sticky  w-100" ref={modalRef} >
        <div className="">
    <div className=" m-4 p-2  rounded-md bg-lightthemebg2  dark:bg-darkbg1 xl:w-72 w-100 relative">
      <input
        className="w-full bg-lightthemebg dark:bg-lightbg  py-2 border border-primary  rounded-full px-3 dark:text-terniarycolor text-lightthemetext text-sm focus:outline-none"
        placeholder="Search..."
        value={searchterm}
    
        onChange={(e)=>{
            setShowSearchedModal(true)
            debounceSearch(dispatch(setSearchList(e.target.value),400))}}
      ></input>
      <span class="material-icons-outlined text-primary absolute top-3.5 right-5 cursor-pointer" onClick={()=>dispatch(setSearchList(""))}>
        close
      </span>
     
      </div>
      {searchterm?.trim().length?
      
     <div className="absolute " style={{zIndex:999}}>
     {showSearchedModal?<SearchedUserModal/>:null}
     </div>:null}
   
    </div>
    </div> 
  );
};
