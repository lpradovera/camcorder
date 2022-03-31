import React, { useState } from "react";

export const InviteForm = ({ roomName, onJoin = () => {}, mod = false }) => {
  let [name, setName] = useState("");
  let [joinAsGuest, setJoinAsGuest] = useState(false);

  return (
    <>
      <div>
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
          {mod && (
            <>
              <input
                type="checkbox"
                id="mod"
                onChange={(e) => {
                  setJoinAsGuest(e.target.checked);
                }}
              />
              <label htmlFor="mod">
                Please add me without moderator privileges
              </label>
            </>
          )}
          <button
            className="w-full flex justify-center py-2 px-4 border border-transparent text-2xl font-extrabold rounded-md text-white bg-slate-500 hover:bg-slate-800"
            type="submit"
            onClick={() => {
              if(name !== "") {
                onJoin({
                  name, 
                  room: roomName,
                  mod: mod && !joinAsGuest
                })
              } else {
                alert(
                  "Please Fill all fields (todo use bootstrap alert or form error messages)"
                );
              }
            }}
          >
            Join {roomName} {mod && !joinAsGuest ? " as moderator" : ""}
          </button>
        </form>
      </div>
    </>
  );
};
