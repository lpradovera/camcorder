import React, {useState, useEffect} from "react";

export const ControlPanelWrapper = ({ children }) => {
  
  const [orient, setOrient] = useState();

  useEffect(() => {
    setOrient(window.orientation);
  }, [window.orientation])

  useEffect(() => {
    window.addEventListener(
      "orientationchange",
      function () {
        setOrient(window.orientation);
      },
      false
    );
    return () => {
      setOrient();
    };
  }, [window.orientation]);

  return (
    <div
      className={` ${
        (orient == 90) ? "landscape:relative" : "fixed"
      }  w-full md:w-9/12 bottom-5 flex flex-col justify-end`}
    >
      {children}
    </div>
  );
};
