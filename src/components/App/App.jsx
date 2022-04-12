import React, { useEffect, useState } from "react";
import { Layout } from "../Layout/Layout";
import { JoinCallForm } from "../JoinCallForm/JoinCallForm";
import { InviteForm } from "../InviteForm/InviteForm";
import { InCall } from "../InCall/InCall";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { Home } from "../Home/Home";

import {
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const App = () => {
  let query = useQuery();
  let location = useLocation();
  let navigate = useNavigate();
  let [roomDetails, setRoomDetails] = useState({});

  useEffect(() => {
    if (location.state !== null) {
      console.log(location.state, "location");
      setRoomDetails({
        name: location.state.name,
        room: location.state.room,
        mod: location.state.mod,
      });
    }
    return () => {
      setRoomDetails({})
    }
  }, []);

  const InCallRoute = ({ roomDetails }) => {
    return <InCall roomDetails={roomDetails} />;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="dashboard"
            element={
              <JoinCallForm
                onJoin={({ room, name }) => {
                  setRoomDetails({ name, room, mod: true });
                  navigate("in-call", {
                    state: { name: name, room: room, mod: true },
                  });
                }}
              />
            }
          />

          <Route
            path="invite"
            element={
              <InviteForm
                mod={query.get("m") === "mod"}
                roomName={query.get("r")}
                onJoin={({ room, name, mod }) => {
                  setRoomDetails({ name, room, mod });
                  navigate("in-call", {
                    state: { name: name, room: room, mod: mod },
                  });
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
