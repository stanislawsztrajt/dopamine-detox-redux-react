import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field } from "formik";
import React, { FC } from "react";
import { blockedApps } from "src/data/blocked-apps";

const BlockedAppsList: FC = () => {
  return (
    <>
      {blockedApps.map(({ name, icon }) => {
        return (
          <div className="radio-input-day" key={name}>
            <Field
              type="checkbox"
              className="hidden peer"
              name="blockedApps"
              id={name}
              value={name}
            />
            <div className="radio-input-label">
              <label className="w-full h-full" htmlFor={name}>
                <h2 className="text-xl text-center">
                  <FontAwesomeIcon icon={icon} />
                  <span className="ml-2">{name}</span>
                </h2>
              </label>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlockedAppsList;
