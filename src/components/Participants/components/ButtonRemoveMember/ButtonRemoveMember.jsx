import React from 'react';
import { PhoneMissedCall } from '../../../Icons/PhoneMissedCall/PhoneMissedCall';


export const ButtonRemoveMember = ({onMemberUpdate, member}) => {

  return (
    <button
      className="px-2 py-2 dark:bg-red-500 hover:dark:bg-red-600 rounded"
      onClick={() => {
          onMemberUpdate({
            action: "remove",
            id: member.id,
          });
      }}
    >
      <PhoneMissedCall />
    </button>
  )
}