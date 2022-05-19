import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="grid  grid-cols-[1fr] md:grid-cols-[2fr_3fr] h-screen w-screen ">
      <div className="bg-secondary flex flex-col justify-center items-center">
        <img src="./assests/logoimg.png" className="w-3/4"></img>
        <div className="flex flex-col   mt-6 text-terniarycolor mt-10">
          <li className="list-none flex items-center ">
            {" "}
            <span class="material-icons modal_icon sm:text-sm text-xs mx-1 ">
              search
            </span>
            <span className="text-sm">Follow what interest you.</span>
          </li>
          <li className="list-none my-2 flex items-center">
            <span class="material-icons modal_icon sm:text-sm mx-1 text-xs ">
              group
            </span>{" "}
            <span className="text-sm">Hear what others are talking About</span>
          </li>
          <li className="list-none flex-items-center ">
            <span class="material-icons modal_icon  mx-1  text-xs ">
              comment
            </span>{" "}
            <span className="text-sm">Join For Conversation</span>
          </li>
        </div>
      </div>
      <div
        className=" flex justify-center items-center
            bg-lightbg text-terniarycolor "
      >
        <div className="flex flex-col justify-center">
          <h3 className=" sm:text-4xl pb-4 text-center text-3xl px-1">
            <span className="text-secondary pr-2 text-center font-bold ">
              Matrix:
            </span>
            <span className="text-2xl sm:text-3xl">
              Social Media for Fun...
            </span>
          </h3>
          <div className="text-red pb-20 text-center">Join Matrix today</div>
          <div className="flex flex-col items-center">
            <button
              className="bg-primary px-14 py-2 mb-4 w-2/3 rounded uppercase "
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
            <button
              className="bg-secondary px-16 py-2 w-2/3 rounded border-none uppercase hover:bg-primary"
              onClick={() => navigate("login")}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export { LandingPage };
