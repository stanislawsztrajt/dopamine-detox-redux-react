import { Field } from "formik";
import React, { FC } from "react";

const ReminderNotification: FC = () => {
  return (
    <>
      <div className="radio-input">
        <Field
          type="radio"
          className="hidden peer"
          id="reminderNotificationsEnabled"
          name="reminderNotificationsEnabled"
          value="yes"
        />
        <div className="w-96 radio-input-label">
          <label htmlFor="reminderNotificationsEnabled" className="w-full h-full">
            <h2 className="radio-input-h2">yes</h2>
          </label>
        </div>
      </div>
      <div className="radio-input">
        <Field
          type="radio"
          className="hidden peer"
          id="reminderNotificationsEnabled2"
          name="reminderNotificationsEnabled"
          value="no"
        />
        <div className="w-96 radio-input-label">
          <label htmlFor="reminderNotificationsEnabled2" className="w-full h-full">
            <h2 className="radio-input-h2">no</h2>
          </label>
        </div>
      </div>
    </>
  );
};

export default ReminderNotification;
