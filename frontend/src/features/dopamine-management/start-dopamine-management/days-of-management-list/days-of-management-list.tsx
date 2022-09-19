import { Field } from "formik";
import React, { FC } from "react";

const DaysOfManagement: FC = () => {
  const daysOfManagement = [
    { string: "1 day", number: "1" },
    { string: "2 days", number: "2" },
    { string: "3 days", number: "3" },
    { string: "5 days", number: "5" },
    { string: "1 week", number: "7" },
    { string: "2 weeks", number: "14" },
  ] as const;

  return (
    <>
      {daysOfManagement.map(({ string, number }) => {
        return (
          <div className="radio-input-day" key={number}>
            <Field
              type="radio"
              className="hidden peer"
              id={number}
              name="daysOfManagement"
              value={number}
            />
            <div className="radio-input-label">
              <label className="w-full h-full" htmlFor={number}>
                <h2 className="radio-input-h2">{string}</h2>
              </label>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DaysOfManagement;
