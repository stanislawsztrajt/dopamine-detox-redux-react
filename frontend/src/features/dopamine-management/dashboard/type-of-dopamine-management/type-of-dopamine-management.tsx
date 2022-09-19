import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { getTypeOfDopamineManagement } from "src/features/dopamine-management/slice/dopamine-management-slice";

const TypeOfDopamineManagement: FC = () => {
  const typeOfDopamineManagement = useSelector(getTypeOfDopamineManagement);

  return (
    <div className="timerBlock">
      <div className="flex flex-row justify-between">
        <div className="text-3xl text-green-600 ">
          <FontAwesomeIcon icon={faTree} />
        </div>
        <div className="uppercase">
          <div className="text-sm font-light text-right">type of dopamine management</div>
          <div className="text-2xl text-right">{typeOfDopamineManagement}</div>
        </div>
      </div>
    </div>
  );
};

export default TypeOfDopamineManagement;
