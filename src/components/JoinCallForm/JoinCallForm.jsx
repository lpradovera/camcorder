import React, { useState } from "react";

export const JoinCallForm = ({ onJoin = () => {} }) => {
  let [name, setName] = useState("");
  let [room, setRoom] = useState("");
  let [video, setVideo] = useState(false);
  let [audio, setAudio] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && room !== "") {
      onJoin({ name, room });
    } else {
      alert("Please Fill all fields");
    }
  };
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-silver-100">
          Join a new Room
        </h2>

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
            value={room}
            pattern="[^' ']+"
            required
          />
          {/* <div className="flex flex-col items-start justify-between">
              <div className="flex items-center pb-4">
                <input
                  id="video"
                  name="video"
                  type="checkbox"
                  onChange={(e) => setVideo(e.target.checked)}
                  className="h-6 w-6 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="video" className="ml-2 block text-xl text-slate-400">
                  Connect with video?
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="audio"
                  name="audio"
                  type="checkbox"
                  onChange={(e) => setAudio(e.target.checked)}
                  className="h-6 w-6 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="audio" className="ml-2 block text-xl text-slate-400">
                  Connect with audio?
                </label>
              </div>
          </div> */}
          <button
            className="w-full flex justify-center py-2 px-4 border border-transparent text-2xl font-extrabold rounded-md text-white bg-slate-500 hover:bg-slate-800"
            type="submit"
          >
            Join
          </button>
        </form>
      </div>
    </div>
  );
};
