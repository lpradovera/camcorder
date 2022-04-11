import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="dark:slate-600">
      <div className="h-[60vh] text-slate-300 text-center flex flex-col justify-center content-center">
        <p className="py-4 text-7xl">404</p>
        <p>Sorry this page does not exist</p>
        <p>You can return to the main <Link className="text-red-500" to="/">page</Link></p>
      </div>
    </div>
  );
};
