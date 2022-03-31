import React from "react";

export const InputVolume = ({room, member}) => {
  return (
    <div className="relative">
      <input
        onChange={(e) => {
          room.setInputVolume({
            memberId: member.id,
            volume: e.target.value,
          });
          console.log(member.input_volume, "Volume");
        }}
        type="range"
        id="range"
        step="5"
        min="-41"
        max="41"
        value={member.input_volume || 0}
        className="appearance-none cursor-pointer outline-none bg-slate-700 w-[70%] h-[5px] slider-thumb"
      />
      <div
        className={`absolute top-[13px] left-0 ${
          member.input_volume < -30 ? "bg-red-800" : "bg-green-500"
        } w-[6%] h-1`}
      ></div>
      <div
        className={`absolute top-[13px] left-[7%] ${
          member.input_volume < -27 && "hidden"
        } bg-green-500 w-[6%] h-1`}
      ></div>

      <div
        className={`absolute top-[13px] left-[14%] ${
          member.input_volume < -18 && "hidden"
        } bg-green-500 w-[6%] h-1`}
      ></div>

      <div
        className={`absolute top-[13px] left-[21%] ${
          member.input_volume < -10 && "hidden"
        } bg-green-500 w-[6%] h-1`}
      ></div>

      <div
        className={`absolute top-[13px] left-[28%] ${
          member.input_volume < -2 && "hidden"
        } bg-green-500 w-[6%] h-1`}
      ></div>

      <div
        className={`absolute top-[13px] left-[35%] ${
          member.input_volume < 7 && "hidden"
        } bg-green-500 w-[6%] h-1`}
      ></div>

      <div
        className={`absolute top-[13px] left-[42%] ${
          member.input_volume < 15 && "hidden"
        } bg-amber-600 w-[6%] h-1`}
      ></div>
      <div
        className={`absolute top-[13px] left-[49%] ${
          member.input_volume < 23 && "hidden"
        } bg-amber-600 w-[6%] h-1`}
      ></div>
      <div
        className={`absolute top-[13px] left-[56%] ${
          member.input_volume < 33 && "hidden"
        } bg-amber-600 w-[6%] h-1`}
      ></div>
      <div
        className={`absolute top-[13px] left-[63%] ${
          member.input_volume < 39 && "hidden"
        } bg-amber-600 w-[6%] h-1`}
      ></div>
    </div>
  );
};
