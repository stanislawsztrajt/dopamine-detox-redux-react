import { Field } from "formik";
import React, { FC } from "react";

const InformationNotification: FC = () => {
  return (
    <>
      <div className=" radio-input">
        <Field
          type="radio"
          className="hidden peer"
          id="infoNotificationsEnabled"
          name="infoNotificationsEnabled"
          value="yes"
        />
        <div className="w-96 radio-input-label">
          <label htmlFor="infoNotificationsEnabled" className="w-full h-full">
            <h2 className="radio-input-h2">yes</h2>
          </label>
        </div>
      </div>
      <div className="radio-input">
        <Field
          type="radio"
          className="hidden peer"
          id="infoNotificationEnabled2"
          name="infoNotificationsEnabled"
          value="no"
        />
        <div className="w-96 radio-input-label">
          <label htmlFor="infoNotificationEnabled2" className="w-full h-full">
            <h2 className="radio-input-h2">no</h2>
          </label>
        </div>
      </div>
    </>
  );
};

export default InformationNotification;
