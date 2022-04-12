import axios from "axios";

export const getToken = async (roomDetails) => {
  const token = await axios.post("api/get_token", {
    user_name: roomDetails.name,
    room_name: roomDetails.room,
    mod: roomDetails.mod,
  });
  return token.data.token;
};

const addZero = (elem) => {
  if (elem < 9) {
    return `0${elem}`;
  } else {
    return elem;
  }
};

export const getDate = (d) => {
  let date = new Date(d);
  return `${addZero(date.getDate())}.${addZero(date.getMonth())}`;
};

export const isEmpty = (obj) => {
  for (let key in obj) {
    return false;
  }
  return true;
};

export const copy = (text) => {
  navigator.clipboard.writeText(text);
};
