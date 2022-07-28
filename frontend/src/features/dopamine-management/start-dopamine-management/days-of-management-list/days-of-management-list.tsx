import { Field } from "formik";
import React, { FC } from "react";

const DaysOfManagement: FC = () => {
  const daysOfManagement = ["1 day", "2 days", "3 days", "5 days", "1 week", "2 weeks"] as const;

  return (
    <>
      {daysOfManagement.map((day) => {
        return (
          <div className="radio-input-day" key={day}>
            <Field
              type="radio"
              className="hidden peer"
              id={day}
              name="daysOfManagement"
              value={day}
            />
            <div className="radio-input-label">
              <label className="w-full h-full" htmlFor={day}>
                <h2 className="radio-input-h2">{day}</h2>
              </label>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DaysOfManagement;
