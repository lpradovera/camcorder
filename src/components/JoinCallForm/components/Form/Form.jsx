import React from "react";

export const Form = ({ handleSubmit, setName, setRoom }) => {
  return (
    <form className="mt-8 space-y-6" onSubmit={(e) => handleSubmit(e)}>
      <input
        style={{ fontSize: "24px" }}
        className="appearance-none rounded w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        type="text"
        pattern="[^' ']+"
        placeholder="Your Name"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        style={{ fontSize: "24px" }}
        className="appearance-none input-placeholder-xl rounded relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        type="text"
        placeholder="Room Name"
        onChange={(e) => setRoom(e.target.value)}
        pattern="[^' ']+"
        required
      />
      <button
        className="w-full flex justify-center py-2 px-4 border border-transparent text-2xl font-extrabold rounded-md text-white bg-slate-500 hover:bg-slate-800"
        type="submit"
      >
        Join
      </button>
    </form>
  );
};
