import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTypeOfDopamineManagement,
  decrementCurrentTimer,
  decrementGlobalTimer,
  decrementEndsTime,
  getStatus,
  getEndsTime,
  checkNotifications,
} from "src/features/dopamine-management/dopamine-management-slice";

const useDashborad = () => {
  const typeOfDopamineManagement = useSelector(getTypeOfDopamineManagement);
  const endsTime = useSelector(getEndsTime);
  const status = useSelector(getStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "succeeded") {
      setInterval(() => {
        if (typeOfDopamineManagement !== "none" && Date.now() <= Number(endsTime)) {
          dispatch(decrementCurrentTimer());
          dispatch(decrementGlobalTimer());
          dispatch(decrementEndsTime());
          dispatch(checkNotifications());
        }
      }, 1000);
    }
  }, [status]);

  return {
    status,
  };
};
export default useDashborad;
