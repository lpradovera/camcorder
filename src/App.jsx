import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header.jsx";
import JoinCallForm from "./components/JoinCallForm.jsx";
import InviteForm from "./components/InviteForm.jsx";
import InCall from "./components/InCall.jsx";

import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate
} from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const InCallRoute = ({ roomDetails }) => {
    if (roomDetails.name === undefined || roomDetails.room === undefined) {
      return (<Navigate to="/" />)
    } else {
      return(<InCall roomDetails={roomDetails} />)
    }
}

function App() {
  let query = useQuery();
  let navigate = useNavigate();
  let [roomDetails, setRoomDetails] = useState({});

  return (
    <div className="dark:bg-slate-600">
      <Header />
      <Routes>
        <Route path="/in-call" element={<InCallRoute roomDetails={roomDetails} />}></Route>       
        <Route path="/" element={<JoinCallForm
          onJoin={({ room, name }) => {
            setRoomDetails({ name, room });
            navigate("/in-call");
          }}
        />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
