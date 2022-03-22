import axios from "axios";

export const getToken = async (roomDetails) => {
  const token = await axios.post("/api/get_token", {
     user_name: roomDetails.name,
     room_name: roomDetails.room,
     mod: roomDetails.mod,
   })
   return token.data.token
 };