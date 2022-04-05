import React from "react";
import { PhoneMissedCall } from "../../../../Icons/PhoneMissedCall/PhoneMissedCall";
import { handleRemoveMember } from "../../../../../helpers/helpers";

export const ButtonRemoveMember = ({ room, member }) => {
  return (
    <button
      className="px-2 py-2 dark:bg-red-600 hover:dark:bg-red-500 rounded"
      onClick={() => handleRemoveMember(room, member)}
    >
      <PhoneMissedCall width={4} height={4}/>
    </button>
  );
};
