import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { useSelector } from "react-redux";

import { blockedApps } from "src/utils/data/blocked-apps";
import { getBlockedApps } from "src/features/dopamine-management/slice/dopamine-management-slice";

const BlockedApps: FC = () => {
  const blockedAppsState = useSelector(getBlockedApps);
  const blockedAppsMap = blockedApps
    .filter(({ name }) => blockedAppsState.includes(name))
    .map(({ name, icon }) => {
      return (
        <div className="p-4 mt-2 ml-4 text-lg" key={name}>
          <FontAwesomeIcon className="text-xl text-primary-text" icon={icon} />
          <span className="ml-1">{name}</span>
        </div>
      );
    });

  return (
    <div className="w-1/2 p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-medium">
        <FontAwesomeIcon className="text-strong-text" icon={faLock} />
        <span className="ml-2">Blocked apps</span>
      </h3>
      <div className="flex flex-row flex-wrap mt-4">{blockedAppsMap}</div>
    </div>
  );
};

export default BlockedApps;
