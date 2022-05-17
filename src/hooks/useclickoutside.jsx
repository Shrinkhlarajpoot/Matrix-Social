import { useEffect } from "react";

export const useclcikoutside = (ref, setState) => {
  useEffect(() => {
    const closeModal = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setState(false);
      }
    };
    document.addEventListener("mousedown", closeModal);
    return () => document.removeEventListener("mousedown", closeModal);
  }, [ref, setState]);
};
