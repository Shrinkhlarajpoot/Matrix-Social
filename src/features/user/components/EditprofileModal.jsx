import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserAvatar } from "../../../components";
import { getAllUsers, setLoading, updateProfile } from "../userSlice";
export const EditprofileModal = ({ setEditModal }) => {
  const { token, user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const currentUser = users.find(
    (curruser) => curruser.username === user.username
  );
  const [editInput, setEditInput] = useState(currentUser);
  const [newProfileUrl, setNewProfileUrl] = useState("");
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  const editChangeHandler = (e) => {
    const { name, value } = e.target;
    setEditInput(() => ({ ...editInput, [name]: value }));
  };
  const cloudnary_url =
    "https://api.cloudinary.com/v1_1/ds6cgk1wy/image/upload";
  const uploadImageFile = async () => {
    dispatch(setLoading())
    const file = newProfileUrl;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "matrix");
    formData.append("folder", "matrix images");
    if (Math.round(file.size / 1024000) > 1) {
      console.log("File size should not be more than 1Mb");
    } else {
      fetch(cloudnary_url, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          
          return dispatch(
            updateProfile({
              editInput: {
                ...currentUser,
                ...editInput,
                profileImage: data.url,
              },
              token,
            })
          );
          })
        .catch((err) => console.error(err));
    }
  };

  const editFormHandler = (e) => {
    if (newProfileUrl) {
      uploadImageFile();
    } else
      dispatch(
        updateProfile({ editInput: { ...currentUser, ...editInput }, token })
      );
    setEditModal(false);
  };
return (
    <div className="bg-[#00000080] top-0 left-0 fixed w-full h-full z-30 flex justify-center items-center opacity-100 ">
      <div className="w-1/3 border dark:bg-darkbg bg-lightthemebg2 dark:bg-darkbg1  border-primary z-20 flex flex-col py-2 px-3 flex flex-col relative">
        <span
          class="material-icons-outlined absolute top-2 right-2 text-primary cursor-pointer"
          onClick={() => setEditModal(false)}
        >
          cancel
        </span>
        <div className="m-auto pt-1 relative">

          <UserAvatar
            user={
              newProfileUrl
                ? {
                    ...currentUser,
                    profileImage: URL.createObjectURL(newProfileUrl),
                  }
                : currentUser
            }
          />

          <label>
            {" "}
            <span class="material-icons-outlined absolute left-6 -bottom-1 text-primary cursor-pointer text-md">
              photo_camera
            </span>
            <input
              type="file"
              className="hidden "
              onChange={(e) => setNewProfileUrl(e.target.files[0])}
             
            ></input>
          </label>
        </div>
        <label className="mb-1 text-secondary">
          FullName<span className="text-red">*</span>
        </label>
        <input
          type="text"
          className="min-w-full py-1 px-2 rounded dark:bg-lightbg bg-lightthemebg mb-2 text-secondary text-sm"
          placeholder="Enter FullName"
          name="fullName"
          value={editInput?.fullName}
          onChange={(e) => editChangeHandler(e)}
        ></input>
        <label className="mb-1 text-secondary">
          Username<span className="text-red">*</span>
        </label>
        <input
          type="text"
          className="min-w-full py-1 px-2 rounded dark:bg-lightbg bg-lightthemebg mb-2  border border-primary text-secondary text-sm"
          placeholder="Enter Bio"
          name="bio"
          value={editInput?.bio}
          onChange={editChangeHandler}
        ></input>{" "}
        <label className="mb-1 text-secondary">
          Website<span className="text-red">*</span>
        </label>
        <input
          type="text"
          required
          className="min-w-full py-1 px-2 rounded dark:bg-lightbg bg-lightthemebg mb-2  border border-primary text-secondary text-sm"
          placeholder="Enter Website"
          name="website"
          autoFocus
          value={editInput?.website}
          onChange={editChangeHandler}
        ></input>
        <div className="self-end ">
          <button
            className="px-4 py-1 hover:bg-primary text-terniarycolor rounded-full  border border-primary  my-4 mr-2 "
            onClick={() => setEditInput(currentUser)}
          >
            Cancel
          </button>

          <button
            className="self-end px-4 py-1 bg-primary text-terniarycolor rounded-full  border border-primary my-4 disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            onClick={(e) => editFormHandler(e)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};