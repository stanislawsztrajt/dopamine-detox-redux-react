import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";
import { getNotifications } from "src/features/dopamine-management/dopamine-management-slice";

const LastNotifications: FC = () => {
  const notifications = useSelector(getNotifications);

  const notificationsMap = notifications.map(({ notification }, index) => {
    return <div key={index}>{notification}</div>;
  });

  return (
    <div className="w-1/2 p-4 bg-white rounded-lg shadow-lg">
      <h4 className="text-2xl font-medium">
        <FontAwesomeIcon className="text-yellow-600" icon={faBell} />
        <span className="ml-2">Last notifications</span>
      </h4>
      <div className="mt-4 ml-4 text-lg">{notificationsMap.splice(0, 10)}</div>
    </div>
  );
};

export default LastNotifications;
