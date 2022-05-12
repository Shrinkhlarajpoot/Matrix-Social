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
            dispatch(loginHandler({ login, setLogin }));
            setLogin({ ...login, input: { username: "", password: "" } });
          }}
        >
          <img src="./assests/logoimg.webp " className="w-16 h-14 m-auto"></img>
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
            className="min-w-full py-1 px-2 rounded bg-lightbg mb-4 cursor-pointer"
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
              className="min-w-full py-1 px-2 rounded bg-lightbg mb-4 cursor-pointer"
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
          <h3 className="text-center mt-2">
            Dont have an Account?{" "}
            <span
              className=" text-red cursor-pointer"
              role="button"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </h3>
        </form>
      )}
    </div>
  );
};
