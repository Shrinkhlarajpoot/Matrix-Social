const cloudnary_url ="https://api.cloudinary.com/v1_1/ds6cgk1wy/image/upload";

const CLOUDINARY_UPLOAD_PRESET = "gjjzcn60";

export const uploadImage = (image) => {
  const file = image;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "matrix");
  formData.append("folder", "matrix images");

  return fetch(cloudnary_url, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};

// const cloudnary_url =
//     "https://api.cloudinary.com/v1_1/ds6cgk1wy/image/upload";
//   const uploadImageFile = async () => {
//     dispatch(setLoading());
//     const file = newProfileUrl;
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "matrix");
//     formData.append("folder", "matrix images");
//     if (Math.round(file.size / 1024000) > 1) {
//       console.log("File size should not be more than 1Mb");
//     } else {
//       fetch(cloudnary_url, {
//         method: "POST",
//         body: formData,
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           return dispatch(
//             updateProfile({
//               editInput: {
//                 ...currentUser,
//                 ...editInput,
//                 profileImage: data.url,
//               },
//               token,
//             })
//           );
//         })
//         .catch((err) => console.error(err));
//     }
//   };