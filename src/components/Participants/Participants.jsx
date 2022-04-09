import React from "react";
import { MemberList } from "./components/MemberList/MemberList";
import { ButtonChevron } from "./components/ButtonComponents/ButtonChevron/ButtonChevron";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { RecordingsList } from "./components/RecordingsList/RecordingsList";
import { useLocation } from "react-router-dom";

export const Participants = ({
  memberList,
  offset,
  handleHide,
}) => {
  const location = useLocation();
  return (
    <>
      <ButtonChevron handleHide={handleHide} offset={offset} />
      <Tabs className={`${offset ? "hidden" : "block"} md:block`}>
        <TabList className="flex justify-center text-slate-200 pb-4">
          <Tab className="px-6 cursor-pointer border-b-2 hover:border-b-2 hover:border-white border-transparent">
            Members
          </Tab>
          <Tab className="px-6 cursor-pointer hover:border-b-2 hover:border-white border-transparent">
            Records
          </Tab>
        </TabList>

        <TabPanel className="px-6 py-6 md:px-0 md:py-0">
          <MemberList
            memberList={memberList}
          />
        </TabPanel>
        <TabPanel className="px-6 py-6">
          {location?.state?.mod ? 
          <RecordingsList />
          : 
          <p className='font-semibold text-slate-300 text-center'>
            Sorry, you do not have access to view video recordings
          </p>
          }
        </TabPanel>
      </Tabs>
    </>
  );
};
