import { useSelector } from "react-redux";
import { getNotifications } from "src/features/dopamine-management/dopamine-management-slice";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const useNotificationsChart = () => {
  const notifications = useSelector(getNotifications);

  const dates: string[] = notifications.map((notification) => notification.date);
  const chartLabels: string[] = dates.filter((element, index) => {
    return dates.indexOf(element) === index;
  });

  let dateCounts = {};
  notifications.forEach((notification) => {
    const currentValue = Object.entries(dateCounts).find(
      (date) => date[0] === notification.date
    ) ?? [notification.date, 0];

    dateCounts = {
      ...dateCounts,
      [notification.date]: Number(currentValue[1]) > 0 ? Number(currentValue[1]) + 1 : 1,
    };
  });

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        fill: true,
        label: "Notifications",
        data: Object.values(dateCounts),
        borderColor: "rgb(235, 29, 54)",
        backgroundColor: "rgba(235, 29,	54, 0.5)",
      },
    ],
  };

  return {
    options,
    chartData,
  };
};

export default useNotificationsChart;
