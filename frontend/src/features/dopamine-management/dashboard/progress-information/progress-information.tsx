import React, { FC } from "react";
import { useSelector } from "react-redux";
import {
  getDaysOfManagement,
  getEndsTime,
  getStartCurrentTime,
} from "src/features/dopamine-management/dopamine-management-slice";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import dopamineInfos from "src/data/dopamine-infos.json";

const ProgressInformation: FC = () => {
  const endsTime = useSelector(getEndsTime);
  const startTimeCurrent = useSelector(getStartCurrentTime);
  const daysOfManagement = useSelector(getDaysOfManagement);

  const dopamineInfosMap = dopamineInfos.map((info: string, index: number) => {
    return (
      <p
        key={index}
        className={`
        text-lg
        ${
          index >
          daysOfManagement - new Date(Number(endsTime) - Number(startTimeCurrent)).getDate() - 2
            ? ""
            : "text-black line-through"
        }`}
      >
        Day {index + 1} - {info}
      </p>
    );
  });

  return (
    <div className="w-1/2 p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-medium">
        <span className="text-green-600">
          <FontAwesomeIcon icon={faListCheck} />
        </span>
        <span className="ml-2">Progress by days</span>
      </h3>
      <div className="mt-4 ml-4">{dopamineInfosMap}</div>
    </div>
  );
};

export default ProgressInformation;
