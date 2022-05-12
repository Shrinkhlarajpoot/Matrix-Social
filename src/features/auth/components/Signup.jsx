import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../../components/Loader/Loader";
import { signupHandler } from "../authSlice";

export const Signup = () => {
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [signup, setSignup] = useState({
    input: {},
    error: "",
    hide: {
      password: true,
      confirmpassword: true,
    },
    pwdMatch: true,
  });
  const SignupInputsHandler = (e) => {
    const { name, value } = e.target;
    if (name === "confirmpassword") {
      setSignup({
        ...signup,
        input: { ...signup.input, [name]: value },
        pwdMatch: value === signup.input.password ? true : false,
      });
    } else {
      setSignup({ ...signup, input: { ...signup.input, [name]: value } });
    }
  };

  return (
    <div className="bg-lightbg flex justify-center items-center w-screen h-screen ">
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <form
          className=" bg-darkbg flex flex-col justify-around  w-1/3 h-{'fit-content-fit-content'} text-terniarycolor p-4 rounded"
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            signup.pwdMatch
              ? (dispatch(signupHandler({ signup, setSignup })),
                setSignup({
                  ...signup,
                  input: {
                    name: "",
                    username: "",
                    password: "",
                    confirmpassword: "",
                  },
                  error: "",
                }))
              : setSignup({ ...signup, error: "Password doesnt Match" });
          }}
        >
          <img src="./assests/logoimg.webp " className="w-16 h-14 m-auto"></img>
          <h2 className="text-secondary uppercase text-xl mb-2 text-center">
            Create Your Account.
          </h2>
          {signup.error ? (
            <div className="text-red text-md text-center mx-2">
              Error: {signup.error}
            </div>
          ) : (
            ""
          )}
          <label className="text-left mb-1">
            Name<span className="text-red">*</span>
          </label>
          <input
            className="min-w-full py-1 px-2 rounded bg-lightbg mb-4 cursor-pointer"
            placeholder="Enter Name"
            type="text"
            name="fullName"
            autoFocus
            value={signup.input.fullName || ""}
            onChange={(e) => SignupInputsHandler(e)}
            required
          ></input>

          <label className="text-left mb-1">
            Username<span className="text-red">*</span>
          </label>
          <input
            className="min-w-full py-1 px-2 rounded bg-lightbg mb-4 cursor-pointer"
            placeholder="Enter Username"
            type="text"
            name="username"
            required
            value={signup.input.username || ""}
            onChange={(e) => SignupInputsHandler(e)}
          ></input>
          <label className="mb-1">
            Password<span className="text-red">*</span>
          </label>
          <div className="relative">
            <input
              className="min-w-full py-1 px-2 rounded bg-lightbg mb-4 cursor-pointer"
              placeholder="Enter Password"
              name="password"
              required
              value={signup.input?.password || ""}
              onChange={(e) => SignupInputsHandler(e)}
              type={signup.hide?.password ? "password" : "text"}
            ></input>
            <span
              class="material-icons modal_icon  absolute top-1 right-2 cursor-pointer text-secondary"
              role="button"
              onClick={() =>
                setSignup({
                  ...signup,
                  hide: { ...signup.hide, password: !signup.hide.password },
                })
              }
            >
              {signup.hide?.password ? "visibility_off" : "visibility"}
            </span>
          </div>
          <label className="text-left mb-1">
            Confirm Password<span className="text-red">*</span>
          </label>
          <div className="relative">
            <input
              className="min-w-full py-1 px-2 rounded bg-lightbg mb-4 cursor-pointer"
              placeholder="Enter Confirm Password"
              name="confirmpassword"
              required
              type={signup.hide?.confirmpassword ? "password" : "text"}
              value={signup.input?.confirmpassword || ""}
              onChange={(e) => SignupInputsHandler(e)}
            ></input>
            <span
              class="material-icons modal_icon  absolute top-1 right-2 cursor-pointer text-secondary"
              role="button"
              onClick={() =>
                setSignup({
                  ...signup,
                  hide: {
                    ...signup.hide,
                    confirmpassword: !signup.hide.confirmpassword,
                  },
                })
              }
            >
              {signup.hide?.confirmpassword ? "visibility_off" : "visibility"}
            </span>
          </div>
          <div className="flex flex-col justify-center items-center mt-2">
            <button
              className="w-full bg-primary py-1 px-2 rounded uppercase"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <h3 className="text-center mt-2">
            Already have an Account?{" "}
            <span
              className=" text-red cursor-pointer"
              role="button"
              onClick={() => navigate("/login")}
            >
              Log In
            </span>
          </h3>
        </form>
      )}
    </div>
  );
};
