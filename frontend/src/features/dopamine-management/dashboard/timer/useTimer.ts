import { useSelector } from "react-redux";
import { milisecondsToTimer } from "src/utils/helpers";
import { getDateNow } from "src/features/dopamine-management/slice/dopamine-management-slice";

const useTimer = (time: Date) => {
  const dateNow = useSelector(getDateNow);
  const timer = milisecondsToTimer(Number(dateNow) - Number(time));

  return {
    timer,
  };
};

export default useTimer;
