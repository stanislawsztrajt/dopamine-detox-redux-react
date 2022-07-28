import React, { FC } from "react";
import { Field, Form, Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { checkIsUserNotLoggedIn } from "src/helpers";
import useStartDopamineManagement from "./use-start-dopamine-management";

import "./start-dopamine-management.css";
import { Loading } from "src/features/ui";
import {
  DaysOfManagementList,
  BlockedAppsList,
  TypeOfDopamineDetox,
  ReminderNotification,
  InformationNotification,
} from "src/features/dopamine-management/start-dopamine-management";

const StartDopamineManagement: FC = () => {
  // checkIsUserNotLoggedIn()

  const { initialValues, startDopamineManagementSchema, startDopamineManagement, loading } =
    useStartDopamineManagement();

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={startDopamineManagementSchema}
        onSubmit={startDopamineManagement}
      >
        <Form className="text-center">
          <h1 className="mt-4 text-4xl uppercase">Start dopamine management</h1>
          <div className="flex flex-col items-center mb-4">
            <h2 className="question">Would you like to detox or limit your dopamine?</h2>
            <div className="radio-box">
              <TypeOfDopamineDetox />
            </div>

            <h2 className="question">How long would you like dopamine management?</h2>
            <div className="radio-box-day">
              <DaysOfManagementList />
            </div>

            <h2 className="question">
              Which of applicatpions would you like to block? (not on your computer)
            </h2>
            <div className="radio-box-day">
              <BlockedAppsList />
            </div>

            <h2 className="question">Do you want to enable reminder notifications?</h2>
            <div className="radio-box-day">
              <ReminderNotification />
            </div>

            <h2 className="question">
              Do you want to enable information notifications about your progress?
            </h2>
            <div className="radio-box-day">
              <InformationNotification />
            </div>
          </div>

          <button
            type="submit"
            className="w-5/6 p-8 mt-20 text-2xl font-bold uppercase duration-100 bg-white border rounded-md shadow-md lg:w-2/3 xl:w-1/2 hover:opacity-80"
          >
            Start dopamine managing
          </button>
          <div className="mb-20"></div>
        </Form>
      </Formik>
    </>
  );
};

export default StartDopamineManagement;
