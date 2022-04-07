import React from "react";
import { useDispatch } from "react-redux";

export const ButtonArrow = ({ setIds, i, stop, ids }) => {
  const dispatch = useDispatch();

  return (
    <svg
      onClick={() => {
        dispatch(stop());
        setIds(i + 1);
      }}
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 `}
      viewBox="0 0 20 20"
      fill={`${ids === i + 1 ? "#cbd5e1" : "#f1f5f9"}`}
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
