import userSlice from "./userSlice";
export {getAllUsers,getBookmarks,addBookmark,removeBookmark,followUser,unfollowUser,toggleTheme,setLoading,setSearchList} from "./userSlice";
export {EditprofileModal} from "./components/EditprofileModal";
export {FollowlistModal} from "./components/FolllowlistModal";  
export {FollowinglistModal} from "./components/FollowinglistModal";
export {ProfileDetails} from "./components/ProfileDetails";
export default userSlice.reducer;