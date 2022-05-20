import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../../components/Loader/Loader";
import { loginHandler } from "../authSlice";

export const Login = () => {
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [login, setLogin] = useState({
    input: {},
    error: "",
    hide: true,
  });
  const loginInputsHandler = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, input: { ...login.input, [name]: value } });
  };
  return (
    <div className="flex justify-center items-center w-screen h-screen dark:bg-lightbg bg-lightthemebgmd  ">
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <form
          className=" dark:bg-darkbg1 bg-lightthemebg2 flex flex-col justify-around md:w-1/2  xl:w-1/3  sm:w-4/6  w-96   h-{'fit-content-fit-content'} dark:text-terniarycolor text-lightthemetext p-4 rounded border"
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(loginHandler({ login, setLogin }));
            setLogin({ ...login, input: { username: "", password: "" } });
          }}
        >
          <img src="./assests/logoimg.png " className="w-40 h-30 m-auto"></img>
          <h2 className="text-secondary uppercase text-xl mb-2 text-center">
            Please Login To Continue.
          </h2>
          {login.error && (
            <div className="text-red text-md text-center mx-2">
              Error: {login.error}
            </div>
          )}
          <label className="text-left mb-1">
            Username<span className="text-red">*</span>
          </label>
          <input
            type="text"
            required
            className="min-w-full py-1 px-2 rounded dark:bg-lightbg bg-lightthemebg mb-4 cursor-pointer border text-sm"
            placeholder="Enter Username"
            name="username"
            autoFocus
            value={login.input.username || ""}
            onChange={(e) => loginInputsHandler(e)}
          ></input>
          <label className="mb-1">
            Password<span className="text-red">*</span>
          </label>
          <div className="relative">
            <input
              className="min-w-full py-1 px-2 rounded dark:bg-lightbg bg-lightthemebg mb-4 cursor-pointer border text-sm"
              placeholder="Enter Password"
              type={login.hide ? "password" : "text"}
              name="password"
              value={login.input.password || ""}
              onChange={(e) => loginInputsHandler(e)}
              required
            ></input>
            <span
              class="material-icons modal_icon  absolute top-1 right-2 cursor-pointer text-secondary"
              role="button"
              onClick={() => setLogin({ ...login, hide: !login.hide })}
            >
              {login.hide ? "visibility_off" : "visibility"}
            </span>
          </div>
          <div className="flex flex-col justify-center items-center mt-3">
            <button
              className="w-full bg-primary py-1 px-2 rounded uppercase"
              type="submit"
            >
              Log In
            </button>
            <button
              className="w-full bg-primary py-1 px-2 rounded mt-2 uppercase"
              type="submit"
              onClick={() =>
                setLogin({
                  ...login,
                  input: { username: "shrinkhla", password: "shrinkhla11" },
                })
              }
            >
              Guest Mode
            </button>
          </div>
          <div className="flex flex-wrap justify-center align-center mt-2">
            <h3>
              Dont have an Account?{" "}
              <span
                className=" text-red cursor-pointer"
                role="button"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </span>
            </h3>
          </div>
        </form>
      )}
    </div>
  );
};
