import { Toaster } from "react-hot-toast";

export const ToastWrapper = () => {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{
          bottom: "1rem",
          right: "1rem",
          fontSize: "0.9rem",
        }}
      />
    </>
  );
};