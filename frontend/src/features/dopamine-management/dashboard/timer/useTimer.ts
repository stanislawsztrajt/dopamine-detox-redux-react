import { useSelector } from "react-redux";
import { milisecondsToTimer } from "src/helpers";
import { getDateNow } from "src/features/dopamine-management/dopamine-management-slice";

const useTimer = (time: Date) => {
  const dateNow = useSelector(getDateNow);
  const timer = milisecondsToTimer(Number(dateNow) - Number(time));

  return {
    timer,
  };
};

export default useTimer;
