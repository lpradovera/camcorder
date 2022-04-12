import React from "react";
import { PhoneMissedCall } from "../../../../Icons/PhoneMissedCall/PhoneMissedCall";
import {useDispatch} from 'react-redux';
import { participantsRemoveMember } from '../../../../../features/participantsSlice';


export const ButtonRemoveMember = ({ member }) => {
  const dispatch = useDispatch();

  const handleRemoveMember = async () => {

    dispatch(participantsRemoveMember(member.id));
  };


  return (
    <button
      className="px-4 py-4 md:px-2 md:py-2 dark:bg-red-600 hover:dark:bg-red-500 rounded"
      onClick={() => handleRemoveMember()}
    >
      <PhoneMissedCall width={4} height={4}/>
    </button>
  );
};
