import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "../Icons/Link/Link";
import { useLocation } from "react-router-dom";

const copy = (text) => {
  navigator.clipboard.writeText(text);
};

export const Invite = ({ room = "room", mod }) => {
  const location = useLocation();
  const generateLink = (r, type = "normal") => {
    if (type === "normal")
      return (
        window.location.protocol +
        "//" +
        window.location.host +
        "/invite?r=" +
        r
      );
    else if (type === "mod") return generateLink(r) + "&m=mod";
  };

  return (
    <Menu as="div" className="relative flex flex-col justify-center">
      <div className="flex flex-col px-2 pb-4">
        <Menu.Button className="dark:bg-slate-500 hover:dark:bg-slate-400 rounded flex justify-center pt-4 w-14 h-14">
          <Link />
        </Menu.Button>
        <p className="text-center pt-1 text-slate-300">Invite</p>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-[-90px] bottom-32 mt-2 w-96 rounded-md shadow-lg dark:text-slate-100 dark:bg-slate-400 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-3 px-3">
            <Menu.Item>{() => <h3>As Guest:</h3>}</Menu.Item>
            <Menu.Item>
              {() => (
                <span
                  className="cursor-copy"
                  onClick={() => {
                    copy(generateLink(room));
                  }}
                >
                  {generateLink(room)}
                </span>
              )}
            </Menu.Item>
            {location.state.mod ? (
              <>
                <Menu.Item>
                  {() => (
                    <>
                      <h3>As Moderator:</h3>
                    </>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {() => (
                    <>
                      <span
                        className="cursor-copy"
                        onClick={() => {
                          copy(generateLink(room, "mod"));
                        }}
                      >
                        {generateLink(room, "mod")}
                      </span>
                    </>
                  )}
                </Menu.Item>
              </>
            ) : null}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
