import React, { useState } from "react";
import "./App.css";
import { Layout } from "../Layout/Layout";
import { JoinCallForm } from "../JoinCallForm/JoinCallForm";
import { InviteForm } from "../InviteForm/InviteForm";
import { InCall } from "../InCall/InCall";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";

import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const InCallRoute = ({ roomDetails }) => {
  if (roomDetails.name === undefined || roomDetails.room === undefined) {
    return <Navigate to="/" />;
  } else {
    return <InCall roomDetails={roomDetails} />;
  }
};

export const App = () => {
  let query = useQuery();
  let navigate = useNavigate();
  let [roomDetails, setRoomDetails] = useState({});


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <JoinCallForm
                onJoin={({ room, name }) => {
                  setRoomDetails({ name, room });
                  navigate("in-call");
                }}
              />
            }
          />

          <Route
            path="in-call"
            element={<InCallRoute roomDetails={roomDetails} />}
          />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
