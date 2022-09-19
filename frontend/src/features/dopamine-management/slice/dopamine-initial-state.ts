import { IdopamineManagementState } from "src/utils/types/interfaces";

const dopamineInitialState: IdopamineManagementState = {
  startTimeCurrentTimer: new Date(), // start after each dopamine management and reset after dopamine management ends
  startTimeGlobalTimer: new Date(), // start after first dopamine management
  endsTime: new Date(),
  dateNow: Date.now(),
  daysOfManagement: 7,

  typeOfDopamineManagement: "detox",

  reminderNotificationsEnabled: false,
  infoNotificationsEnabled: false,
  notifications: [{ notification: "", date: "" }],

  // limit state
  blockedApps: [],

  status: "idle",
  error: false,
};

export default dopamineInitialState;
