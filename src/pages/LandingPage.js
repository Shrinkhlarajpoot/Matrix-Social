import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 h-screen w-screen">
      <div className="bg-primary flex flex-col justify-center items-center">
        <img src="./assests/logoimg.png" className="w-3/4"></img>
        <div className="flex flex-col   mt-6 text-terniarycolor mt-10">
          <li className="list-none flex items-center ">
            {" "}
            <span class="material-icons modal_icon text-sm mx-1 ">search</span>
            Follow what interest you.
          </li>
          <li className="list-none my-2 flex items-center">
            <span class="material-icons modal_icon text-sm mx-1 ">group</span>{" "}
            Hear what others are talking About
          </li>
          <li className="list-none flex-items-center">
            <span class="material-icons modal_icon text-sm mx-1 ">comment</span>{" "}
            Join For Conversation
          </li>
        </div>
      </div>
      <div
        className=" flex justify-center items-center
            bg-lightbg text-terniarycolor "
      >
        <div className="flex flex-col justify-center">
          <h3 className="text-4xl pb-4 text-center">
            <span className="text-secondary pr-2 text-center font-bold ">
              Matrix:
            </span>
            Social Media for Programmers
          </h3>
          <div className="text-red pb-20 text-center">Join Matrix today</div>
          <div className="flex flex-col items-center">
            <button
              className="bg-primary px-16 py-2 mb-4 w-2/3 rounded uppercase "
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
