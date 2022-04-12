import React from "react";
import { MemberList } from "./components/MemberList/MemberList";
import { ButtonChevron } from "./components/ButtonComponents/ButtonChevron/ButtonChevron";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { RecordingsList } from "./components/RecordingsList/RecordingsList";
import { AccessText } from "./components/AccessText/AccessText";
import { useLocation } from "react-router-dom";

export const Participants = ({ memberList, offset, handleHide }) => {
  const location = useLocation();
  const { mod } = location?.state;
  return (
    <>
      <ButtonChevron handleHide={handleHide} offset={offset} />
      <Tabs className={`${offset ? "hidden" : "block"} md:block px-2`}>
        <TabList className="flex justify-center text-2xl md:text-base text-slate-200 pb-4">
          <Tab className="px-3 md:px-6 cursor-pointer border-b-2 hover:border-b-2 hover:border-white border-transparent">
            Members
          </Tab>
          <Tab className="px-3 md:px-6 cursor-pointer hover:border-b-2 hover:border-white border-transparent">
            Records
          </Tab>
        </TabList>

        <TabPanel className="px-6 py-10 md:px-0 md:py-6">
          <MemberList memberList={memberList} />
        </TabPanel>
        <TabPanel className="">
          {mod ? <RecordingsList /> : <AccessText />}
        </TabPanel>
      </Tabs>
    </>
  );
};
