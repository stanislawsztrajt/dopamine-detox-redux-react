import React, { FC } from "react";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faBell, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useTimer from "./useTimer";

interface Props {
  time: Date;
  name: string;
  description: string;
  icon: IconDefinition;
}

const Timer: FC<Props> = ({ time, name, icon, description }) => {
  const { timer } = useTimer(time);

  return (
    <div className="timerBlock">
      <div className="flex flex-row justify-between">
        <div
          className={`text-3xl ${
            icon == faBell
              ? "text-blue-600"
              : icon == faClock
              ? "text-strong-text"
              : "text-yellow-600"
          }`}
        >
          <FontAwesomeIcon icon={icon} />
        </div>

        <div className="uppercase">
          <div className="text-sm font-light text-right">{name}</div>
          <div className="text-2xl">{timer}</div>
        </div>
      </div>
      <div className="text-xs font-light uppercase">{description}</div>
    </div>
  );
};

export default Timer;
