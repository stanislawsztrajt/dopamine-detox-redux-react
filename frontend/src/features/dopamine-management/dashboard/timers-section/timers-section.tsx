import React, { FC } from "react";
import { useSelector } from "react-redux";
import { faBell, faCalendarDay, faClock } from "@fortawesome/free-solid-svg-icons";

import Timer from "src/features/dopamine-management/dashboard/timer";
import TypeOfDopamineManagement from "src/features/dopamine-management/dashboard/type-of-dopamine-management";
import {
  getStartGlobalTime,
  getStartCurrentTime,
  getEndsTime,
} from "src/features/dopamine-management/dopamine-management-slice";

const TimersSection: FC = () => {
  const globalTime = useSelector(getStartGlobalTime);
  const currentTime = useSelector(getStartCurrentTime);
  const endsTime = useSelector(getEndsTime);

  return (
    <>
      <Timer
        name={"global time"}
        description={"time of managing detox or reduce dopamine"}
        time={globalTime}
        icon={faClock}
      />
      <Timer
        name={"current time"}
        description={"time of current detox or reduce dopamine management "}
        time={currentTime}
        icon={faCalendarDay}
      />
      <Timer
        name={"time to end "}
        description={"time to complete detox or reduce dopamine management"}
        time={endsTime}
        icon={faBell}
      />
      <TypeOfDopamineManagement />
    </>
  );
};

export default TimersSection;
