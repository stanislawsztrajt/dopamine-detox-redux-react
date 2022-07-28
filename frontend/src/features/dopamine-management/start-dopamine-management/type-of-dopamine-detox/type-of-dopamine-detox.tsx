import { Field } from "formik";
import React, { FC } from "react";

const TypeOfDopamineDetox: FC = () => {
  return (
    <>
      <div className="radio-input">
        <Field
          type="radio"
          className="hidden peer"
          id="typeOfDopamineManagement"
          name="typeOfDopamineManagement"
          value="detox"
        />
        <label className="radio-input-label" htmlFor="typeOfDopamineManagement">
          <h2 className="radio-input-h2">detox</h2>
          <p className="radio-input-p">
            descripiton... descripiton... descripiton... descripiton... descripiton...
            descripiton... descripiton... descripiton... descripiton... descripiton...
            descripiton... descripiton...
          </p>
        </label>
      </div>
      <div className="radio-input">
        <Field
          type="radio"
          className="hidden peer"
          id="typeOfDopamineManagement1"
          name="typeOfDopamineManagement"
          value="limit"
        />
        <label className="radio-input-label" htmlFor="typeOfDopamineManagement1">
          <h2 className="radio-input-h2">limit</h2>
          <p className="radio-input-p">
            descripiton... descripiton... descripiton... descripiton... descripiton...
            descripiton... descripiton... descripiton... descripiton... descripiton...
            descripiton... descripiton...
          </p>
        </label>
      </div>
    </>
  );
};

export default TypeOfDopamineDetox;
