import React, { FC } from "react";

import { Line } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";
import useNotificationsChart from "./use-notifications-chart";

const NotificationsChart: FC = () => {
  const { options, chartData } = useNotificationsChart();

  return (
    <div className="w-1/2 p-4 bg-white rounded-lg shadow-lg">
      <h4 className="text-2xl font-medium">
        <FontAwesomeIcon className="text-strong-text" icon={faChartColumn} />
        <span className="ml-2">Last notifications chart</span>
      </h4>

      <Line options={options} data={chartData} />
    </div>
  );
};

export default NotificationsChart;
