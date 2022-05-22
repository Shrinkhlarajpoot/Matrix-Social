export const debounceSearch = (fun, timer) => {
   let timerId = 0;
  return function (...arg) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fun(...arg);
    }, timer);
  };
};
