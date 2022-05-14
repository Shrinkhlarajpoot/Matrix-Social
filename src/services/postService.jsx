import axios from "axios";

 export const getAllPostsService = () => {
  return axios.get("/api/posts");
};

 export const createPostService = ({ input,token,user }) => {
  return axios.post(
    "/api/posts",
    { postData: { content: input, fullName: user.fullName } },
    {
      headers: { authorization: token },
    }
  );
};

export const editPostService = ({ token, post, input }) => {
  return axios.post(
    `/api/posts/edit/${post._id}`,
    { postData: { content: input } },
    {
      headers: { authorization: token },
    }
  );
};

export const deletePostService = ({ _id, token }) => {
    return axios.delete(`/api/posts/${_id}`, {
    headers: { authorization: token },
  });
};
export const likePostService = ({ _id, token }) => {
    return axios.post(
      `/api/posts/like/${_id}`,
      {},
      {
        headers: { authorization: token },
      }
    );
  };
  
export const dislikePostService = ({ _id, token }) => {
    return axios.post(
      `/api/posts/dislike/${_id}`,
      {},
      {
        headers: { authorization: token },
      }
    );
  };


