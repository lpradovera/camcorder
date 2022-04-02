import React from "react";
import { MemberList } from "./components/MemberList/MemberList";
import { ButtonChevron } from "./components/ButtonComponents/ButtonChevron/ButtonChevron";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { RecordingsList } from "./components/RecordingsList/RecordingsList";



export const Participants = ({
  memberList,
  room,
  offset,
  audioMuted,
  handleHide,
  onMemberUpdate,
}) => {
  return (
    <>
      <ButtonChevron handleHide={handleHide} offset={offset} />

        <Tabs>
          <TabList className="flex py-3 px-3 text-slate-200">
            <Tab className="px-6 cursor-pointer">Members</Tab>
            <Tab className="px-6 cursor-pointer">Records</Tab>
          </TabList>

          <TabPanel className="px-6 py-6">
            <MemberList
              memberList={memberList}
              room={room}
              onMemberUpdate={onMemberUpdate}
              audioMuted={audioMuted}
            />
          </TabPanel>
          <TabPanel className="px-6 py-6">
            <RecordingsList room={room} />
          </TabPanel>
        </Tabs>

    </>
  );
};
