import * as Yup from "yup";
import { IstartDopamineManagement } from "src/utils/types/interfaces";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const startDopamineManagementSchema = Yup.object().shape({
  // typeOfDopamineManagement: Yup.string().required("Required"),
  // endsTime: Yup.string().required("Required"),
  // daysOfManagement: Yup.string().required("Required"),
  // reminderNotificationsEnabled: Yup.string().required("Required"),
  // infoNotificationsEnabled: Yup.string().required("Required"),
  // blockedApps: Yup.string().required("Required"),
});

const initialValues: IstartDopamineManagement = {
  typeOfDopamineManagement: "none",
  endsTime: new Date(),
  daysOfManagement: 1,
  reminderNotificationsEnabled: false,
  infoNotificationsEnabled: false,
  blockedApps: [],
};

const useStartDopamineManagement = () => {
  // const [loginMutation, { loading }] = useMutation<
  //   { login: { jwt: string; user: Iuser } },
  //   IloginValues
  // >(LOGIN);
  const loading = false;
  const navigate = useNavigate();

  const [error, setError] = useState<string | undefined>();

  const startDopamineManagement = (dopamineManagement: IstartDopamineManagement) => {
    // const data = dopamineManagement;
    // to change notifications from yes/no to true/false ends time += daysOfManagement
    console.log(dopamineManagement);
  };

  return {
    initialValues,
    startDopamineManagementSchema,
    startDopamineManagement,
    error,
    loading,
  };
};
export default useStartDopamineManagement;
