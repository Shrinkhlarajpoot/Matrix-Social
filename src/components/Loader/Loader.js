import "./Loader.css"
export const Loader = () => {
  return (
    <div className="bg-lightbg flex justify-center items-center w-screen h-screen  ">
      <section>
        <div class="loader loader-1">
          <div class="loader-outter"></div>
          <div class="loader-inner"></div>
        </div>
      </section>
    </div>
  );
};
