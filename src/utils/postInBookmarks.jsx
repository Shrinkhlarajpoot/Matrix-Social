export const postInBookmarks = (bookmarks, postId) =>
  bookmarks.find((bookmark) => bookmark._id === postId);