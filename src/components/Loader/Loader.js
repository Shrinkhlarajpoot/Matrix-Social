import { useSelector } from "react-redux";
import "./Loader.css";
export const Loader = () => {
 return (
    <div className="flex justify-center items-center w-100 h-100 mt-10">
      <section>
        <div class="loader loader-1">
          <div class="loader-outter"></div>
          <div class="loader-inner"></div>
        </div>
      </section>
    </div>
  );
};

