import React from "react";

export const VideoParticipantsWrapper = ({ children }) => {
  return (
    <div style={{ minHeight: "100vh" }} className="flex h-full overflow-x-hidden overflow-scroll relative md:static">
      {children}
    </div>
  );
};
