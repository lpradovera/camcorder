import React from "react";
import { useDispatch } from "react-redux";
import { participantsSetInputVolume } from "../../../../../features/participantsSlice";

export const InputVolume = ({ member }) => {
  const dispatch = useDispatch();
  let opacity = member.audio_muted ? "opacity-20" : "opacity-100";

  const handleSetInputVolume = async (e) => {
    dispatch(
      participantsSetInputVolume({
        memberId: member.id,
        volume: e.target.value,
      })
    );
  };

  return (
    <div className="relative w-10/12 pt-2">
      <input
        disabled={member.audio_muted}
        onChange={(e) => handleSetInputVolume(e)}
        type="range"
        id="range"
        step="5"
        min="-41"
        max="41"
        value={member.input_volume || 0}
        className={`appearance-none ${
          member.audio_muted ? "cursor-not-allowed" : "cursor-pointer"
        } outline-none bg-slate-800 w-[70%] h-[5px] slider-thumb`}
      />
      <div
        htmlFor="range"
        className={`absolute top-[21px] left-0 ${
          member.input_volume < -30 ? "bg-red-800" : "bg-green-500"
        } ${opacity} w-[6%] h-1`}
      ></div>
      <div
        className={`absolute top-[21px] left-[7%] ${
          member.input_volume < -27 && "hidden"
        } ${opacity} bg-green-500 w-[6%] h-1`}
      ></div>

      <div
        className={`absolute top-[21px] left-[14%] ${
          member.input_volume < -18 && "hidden"
        } ${opacity} bg-green-500 w-[6%] h-1`}
      ></div>

      <div
        className={`absolute top-[21px] left-[21%] ${
          member.input_volume < -10 && "hidden"
        } ${opacity} bg-green-500 w-[6%] h-1`}
      ></div>

      <div
        className={`absolute top-[21px] left-[28%] ${
          member.input_volume < -2 && "hidden"
        } ${opacity} bg-green-500 w-[6%] h-1`}
      ></div>

      <div
        className={`absolute top-[21px] left-[35%] ${
          member.input_volume < 7 && "hidden"
        } ${opacity} bg-green-500 w-[6%] h-1`}
      ></div>

      <div
        className={`absolute top-[21px] left-[42%] ${
          member.input_volume < 15 && "hidden"
        } ${opacity} bg-amber-600 w-[6%] h-1`}
      ></div>
      <div
        className={`absolute top-[21px] left-[49%] ${
          member.input_volume < 23 && "hidden"
        } ${opacity} bg-amber-600 w-[6%] h-1`}
      ></div>
      <div
        className={`absolute top-[21px] left-[56%] ${
          member.input_volume < 33 && "hidden"
        } ${opacity} bg-amber-600 w-[6%] h-1`}
      ></div>
      <div
        className={`absolute top-[21px] left-[63%] ${
          member.input_volume < 39 && "hidden"
        } ${opacity} bg-amber-600 w-[6%] h-1`}
      ></div>
    </div>
  );
};
