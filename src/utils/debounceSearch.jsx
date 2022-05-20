import { CallMissedOutgoing } from "@material-ui/icons";

export const debounceSearch = (fun, timer) => {
    console.log("debounce calling",fun,timer)
  let timerId = 0;
  return function (...arg) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fun(...arg);
    }, timer);
  };
};
