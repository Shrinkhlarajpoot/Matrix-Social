import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center text-primary bg-lightthemebg dark:bg-lightbg w=screen h-screen  flex-wrap">
      <>
        <h1 className="text-3xl">404 page not found</h1>
        <Link className="p-2 bg-primary text-white ml-3 hover:text-red" to="/explore">
          Go back home
        </Link>
      </>
    </div>
  );
};
