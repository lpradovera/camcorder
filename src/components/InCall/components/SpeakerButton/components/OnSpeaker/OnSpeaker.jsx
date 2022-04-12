import React from "react";
import { VolumeOff } from '../../../../../Icons/VolumeOff/VolumeOff';
import { VolumeUp } from '../../../../../Icons/VolumeUp/VolumeUp';

export const OnSpeaker = ({ volumeMuted }) => {
  return <>{volumeMuted ? <VolumeOff /> : <VolumeUp />}</>;
};
