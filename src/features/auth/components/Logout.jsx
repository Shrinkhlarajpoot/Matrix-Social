import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-lightbg flex justify-center items-center w-screen h-screen ">
      <form className=" bg-darkbg flex flex-col justify-around  w-1/3 h-{'fit-content-fit-content'} text-terniarycolor p-4 rounded">
        <img src="./assests/logoimg.webp " className="w-16 h-14 m-auto"></img>
        <h2 className="text-secondary uppercase text-xl mb-2 text-center">
          Logout Successful
        </h2>
        <h3
          className=" text-red cursor-pointer text-center"
          role="button"
          onClick={() => navigate("/")}
        >
          Move to Home Page
        </h3>
      </form>
    </div>
  );
};
