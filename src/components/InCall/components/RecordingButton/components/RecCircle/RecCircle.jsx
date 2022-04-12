import React from "react";

export const RecCircle = ({ record }) => {
  return (
    <>
      {record ? (
        <div className="animate-pulse border-4 border-red-600 rounded-full w-8 h-8 flex flex-col items-center justify-center">
          <div className="rounded-full w-5 h-5 bg-red-600"></div>
        </div>
      ) : (
        <div className="border-4 border-slate-100 rounded-full w-8 h-8 flex flex-col items-center justify-center">
          <div className="rounded-full w-5 h-5 bg-slate-100"></div>
        </div>
      )}
    </>
  );
};
