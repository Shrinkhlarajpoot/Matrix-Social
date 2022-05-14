import postSlice from "./postSlice";
export {PostInput} from "./components/PostInput";
export {PostCard} from "./components/PastCard";
export {PostOptionsModal} from "./components/PostOptionsModal";
export {getPosts,createPost,editPost,deletePost,likePost,dislikePost} from "./postSlice";
export default postSlice.reducer;