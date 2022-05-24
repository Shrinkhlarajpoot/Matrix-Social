import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllUserService,
  getBookmarkService,
  addBookmarkService,
  removeBookmarkService,
  followUserService,
  unfollowUserService,
  updateProfileService,
} from "../../services";
import { getSearchedUser } from "../../utils";
import toast from "react-hot-toast";
export const getAllUsers = createAsyncThunk(
  "user/getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const { data, status } = await getAllUserService();
      if (status === 200) {
        return data.users;
      }
    } catch(error) {
      console.error(error)
      toast.error("Internal Server Error...")
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);
export const getBookmarks = createAsyncThunk(
  "user/getBookmark",
  async (token, { rejectWithValue }) => {
    try {
      const { data, status } = await getBookmarkService(token);

      if (status === 200) {
        return data.bookmarks;
      }
    } catch(error){
      console.error(error)
      toast.error("Failed to fetch bookmarks...")
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);
export const addBookmark = createAsyncThunk(
  "user/addBookmark",
  async (arg, { rejectWithValue }) => {
    try {
      const { data, status } = await addBookmarkService(arg);

      if (status === 200) {
        toast.success("Added to Bookmarks...")
        return data.bookmarks;
      }
    } catch(error) {
      console.error(error)
      toast.error("Try Again Later..")
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);

export const removeBookmark = createAsyncThunk(
  "user/removeBookmark",
  async (arg, { rejectWithValue }) => {
    try {
      const { data, status } = await removeBookmarkService(arg);

      if (status === 200) {
        toast.success("Removed from Bookmark...")
        return data.bookmarks;
      }
    } catch(error) {
      console.error(error)
      toast.error("Try Again Later...")
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);
export const followUser = createAsyncThunk(
  "user/followUser",
  async (arg, { rejectWithValue }) => {
    try {
      const { data, status } = await followUserService(arg);
      if (status === 200) {
        toast.success("User Followed...")
        return data;
      }
    } catch(error) {
      console.error(error)
      toast.error("Try Again Later...")
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);

export const unfollowUser = createAsyncThunk(
  "user/unfollowUser",
  async (arg, { rejectWithValue }) => {
    try {
      const { data, status } = await unfollowUserService(arg);

      if (status === 200) {
        toast.success('User Un-Followed...')
        return data;
      }
    } catch(error) {
      console.error(error)
      toast.error("Try Again Later..")
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);
export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (arg, { rejectWithValue }) => {
    try {
      const { data, status } = await updateProfileService(arg);
      if (status === 201) {
        toast.success("Profile Updated Sucessfully...")
        return data.user;
      }
    } catch(error) {
      console.error(error)
      toast.error("Try Again Later...")
      return rejectWithValue("Some error occured. Try again");
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    darkTheme: localStorage.getItem("matrix_theme") || 'dark',
    users: [],
    bookmarks: [],
    isLoading: false,
    error: "",
    searchterm:"",
    searchList:[],
  },
  reducers: {
    toggleTheme: (state, { payload }) => {
      
      state.darkTheme = payload;
      localStorage.setItem("matrix_theme", payload);
    },
    setLoading: (state) => {
      state.isLoading = true;
    },
    setSearchList:(state,{payload})=>{
     state.searchterm = payload;
     state.searchList = getSearchedUser(state.users,payload);
    }
  },
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllUsers.fulfilled]: (state, { payload }) => {
      state.users = payload;
      state.isLoading = false;
    },
    [getBookmarks.fulfilled]: (state, { payload }) => {
      state.bookmarks = payload;
    },
    [addBookmark.fulfilled]: (state, { payload }) => {
      state.bookmarks = payload;
    },

    [removeBookmark.fulfilled]: (state, { payload }) => {
      state.bookmarks = payload;
    },
    [followUser.fulfilled]: (state, { payload }) => {
      state.users = state.users.map((user) =>
        user.username === payload.followUser.username
          ? payload.followUser
          : user
      );
      state.users = state.users.map((user) =>
        user.username === payload.user.username ? payload.user : user
      );
    },
    [followUser.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [unfollowUser.fulfilled]: (state, { payload }) => {
      state.users = state.users.map((user) =>
        user.username === payload.followUser.username
          ? payload.followUser
          : user
      );
      state.users = state.users.map((user) =>
        user.username === payload.user.username ? payload.user : user
      );
    },
    [unfollowUser.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [updateProfile.pending]: (state) => {
      state.isLoading = true;
    },
    [updateProfile.fulfilled]: (state, { payload }) => {
      state.users = state.users.map((user) =>
        user.username === payload.username ? payload : user
      );
      state.isLoading = false;
    },

    [updateProfile.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { toggleTheme, setLoading,setSearchList } = userSlice.actions;
export default userSlice.reducer;
