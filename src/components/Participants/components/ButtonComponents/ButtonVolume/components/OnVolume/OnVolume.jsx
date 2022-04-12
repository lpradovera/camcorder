import React from "react";
import { VolumeOff } from "../../../../../../Icons/VolumeOff/VolumeOff";
import { VolumeUp } from "../../../../../../Icons/VolumeUp/VolumeUp";

export const OnVolume = ({ deaf }) => {
  return (
    <>
      {deaf ? (
        <VolumeOff width={4} height={4} />
      ) : (
        <VolumeUp width={4} height={4} />
      )}
    </>
  );
};
