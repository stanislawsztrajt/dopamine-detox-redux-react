import React, { FC } from "react";

import {
  TimersSection,
  ProgressInformation,
  BlockedApps,
} from "src/features/dopamine-management/dashboard";
import {
  LastNotifications,
  NotificationsChart,
} from "src/features/dopamine-management/dashboard/notifications";
import { Loading } from "src/features/ui";
import useDashborad from "./use-dashboard";

const Dashboard: FC = () => {
  const { status } = useDashborad();

  return (
    <main className="w-full">
      {status !== "succeeded" ? (
        <Loading status={status} />
      ) : (
        <>
          <section className="flex flex-row justify-around w-full p-4 mt-16">
            <TimersSection />
          </section>

          <section className="flex flex-row justify-around w-full gap-4 p-10">
            <ProgressInformation />
            <BlockedApps />
          </section>

          <section className="flex flex-row justify-around w-full gap-4 px-10 mt-4">
            <LastNotifications />
            <NotificationsChart />
          </section>
          <div className="mb-8"></div>
        </>
      )}
    </main>
  );
};

export default Dashboard;
