import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllPostsService,
  createPostService,
  editPostService,
  deletePostService,
  likePostService,
  dislikePostService,
  getSinglePostService,
  addCommentService,
  deleteCommentService,
  editCommentService,
} from "../../services";
export const getPosts = createAsyncThunk(
  "post/getPosts",
  async (_, { rejectWithValue }) => {
    try {
      const { data, status } = await getAllPostsService();
      if (status === 200) {
        return data.posts;
      }
    } catch {
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);
export const createPost = createAsyncThunk(
  "post/createPost",
  async (arg, { rejectWithValue }) => {
    const { input, token, user } = arg;

    try {
      const { data, status } = await createPostService({ input, token, user });

      if (status === 201) {
        return data.posts;
      }
    } catch {
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);
export const editPost = createAsyncThunk(
  "post/editPost",
  async (arg, { rejectWithValue }) => {
    const { token, post, input } = arg;

    try {
      const { data, status } = await editPostService({ token, post, input });

      if (status === 201) {
        return data.posts;
      }
    } catch {
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);
export const deletePost = createAsyncThunk(
  "post/deletePost",
  async (arg, { rejectWithValue }) => {
    const { _id, token } = arg;

    try {
      const { data, status } = await deletePostService({ _id, token });
      if (status === 201) {
        return data.posts;
      }
    } catch (err) {
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);
export const likePost = createAsyncThunk(
  "post/likePost",
  async (arg, { rejectWithValue }) => {
    const { token, _id } = arg;

    try {
      const { data, status } = await likePostService({ token, _id });

      if (status === 201) {
        return data.posts;
      }
    } catch {
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);
export const dislikePost = createAsyncThunk(
  "post/dislikePost",
  async (arg, { rejectWithValue }) => {
    const { token, _id } = arg;

    try {
      const { data, status } = await dislikePostService({ token, _id });

      if (status === 201) {
        return data.posts;
      }
    } catch {
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);
export const getSinglePost = createAsyncThunk(
  "post/getSinglePost",
  async (postId, { rejectWithValue }) => {
    try {
      const { data, status } = await getSinglePostService(postId);
      if (status === 200) {
        return data.post;
      }
    } catch {
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);
export const addComment = createAsyncThunk(
  "post/addComment",
  async (arg, { rejectWithValue }) => {
    try {
      const { data, status } = await addCommentService(arg);

      if (status === 201) {
        return data.posts;
      }
    } catch (error) {
      console.log(error.response);
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);

export const editComment = createAsyncThunk(
  "post/editComment",
  async (arg, { rejectWithValue }) => {
    try {
      const { data, status } = await editCommentService(arg);

      if (status === 201) {
        return data.posts;
      }
    } catch {
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);

export const deleteComment = createAsyncThunk(
  "post/deleteComment",
  async (arg, { rejectWithValue }) => {
    console.log(arg, "from delete comeent");
    try {
      const { data, status } = await deleteCommentService(arg);

      if (status === 201) {
        return data.posts;
      }
    } catch {
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState: { posts: [], error: "", isLoading: false, singlepost: null },

  reducer: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = payload;
    },
    [getPosts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [createPost.pending]: (state) => {
      state.isLoading = true;
    },
    [createPost.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = payload;
    },
    [createPost.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isPending = false;
    },
    [editPost.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [editPost.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [deletePost.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [deletePost.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [likePost.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [likePost.rejected]: (state, { payload }) => {
      state.error = payload;
    },

    [dislikePost.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [dislikePost.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [getSinglePost.pending]: (state) => {
      state.isLoading = true;
    },
    [getSinglePost.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.singlepost = payload;
    },
    [getSinglePost.rejected]: (state) => {
      state.isLoading = false;
    },
    [addComment.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [editComment.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [deleteComment.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
  },
});

export default postSlice.reducer;
