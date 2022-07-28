import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "src/app/store";
import { IdopamineManagementState } from "src/types/interfaces";
import axios from "axios";
import dopamineInfos from "src/data/dopamine-infos.json";

const initialState: IdopamineManagementState = {
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

export const fetchDopamineManagementData = createAsyncThunk<{
  data: {
    attributes: IdopamineManagementState;
  };
}>("api/dopamine-management-data", async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/api/dopamine-management-datas/1`
  );
  return data;
});

const dopamineManagementSlice = createSlice({
  name: "dopamineManagement",
  initialState,
  reducers: {
    decrementGlobalTimer: (state) => {
      state.startTimeGlobalTimer = new Date(Number(state.startTimeGlobalTimer) - 1000);
    },
    decrementCurrentTimer: (state) => {
      state.startTimeCurrentTimer = new Date(Number(state.startTimeCurrentTimer) - 1000);
    },
    decrementEndsTime: (state) => {
      state.endsTime = new Date(Number(state.endsTime) - 1000);
    },
    checkNotifications: (state) => {
      const dateNow: Date = new Date(Date.now());
      const dateNowNumber: number = Date.now();

      // for use one time === , for >= more than one time
      if (dateNowNumber === Number(state.endsTime)) {
        // there is reset end time, start time and type of dopamine management to 0
        // state.typeOfDopamineManagement = "none";
        new Notification(`Your dopamine ${state.typeOfDopamineManagement}`);
      }

      // reminder about blocking apps
      const dateNowHours: number = dateNow.getHours();
      const isMinutesSecondsEqualZero = dateNow.getMinutes() === 0 && dateNow.getSeconds() === 0;

      if (
        //              hours
        (dateNowHours === 7 && isMinutesSecondsEqualZero) ||
        (dateNowHours === 9 && isMinutesSecondsEqualZero) ||
        (dateNowHours === 12 && isMinutesSecondsEqualZero) ||
        (dateNowHours === 14 && isMinutesSecondsEqualZero) ||
        (dateNowHours === 16 && isMinutesSecondsEqualZero) ||
        (dateNowHours === 18 && isMinutesSecondsEqualZero) ||
        (dateNowHours === 20 && isMinutesSecondsEqualZero) ||
        (dateNowHours === 22 && isMinutesSecondsEqualZero) ||
        (dateNowHours === 24 && isMinutesSecondsEqualZero)
      ) {
        const randomBlockedAppIndex: number = Math.floor(Math.random() * state.blockedApps.length);
        new Notification(
          `Don't forgot about blocked apps! Eg: ${state.blockedApps[randomBlockedAppIndex]}`
        );
      }

      if (dateNowHours === state.endsTime.getHours() && isMinutesSecondsEqualZero) {
        // add automatic adding notifications to data base whenever used
        const timeToEnd: Date = new Date(
          Number(state.endsTime) - Number(state.startTimeCurrentTimer)
        );

        new Notification(
          `Awesome! Today you have ${
            dopamineInfos[state.daysOfManagement - timeToEnd.getDate() - 1]
          }`
        );
        new Notification(
          `${timeToEnd.getDate() + 1} hours left to complete dopamine ${
            state.typeOfDopamineManagement
          }`
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDopamineManagementData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDopamineManagementData.fulfilled, (state, action) => {
        const {
          startTimeCurrentTimer,
          startTimeGlobalTimer,
          endsTime,
          daysOfManagement,
          typeOfDopamineManagement,
          reminderNotificationsEnabled,
          infoNotificationsEnabled,
          notifications,
          blockedApps,
        } = action.payload.data.attributes;

        state.startTimeCurrentTimer = new Date(startTimeCurrentTimer);
        state.startTimeGlobalTimer = new Date(startTimeGlobalTimer);
        state.endsTime = new Date(endsTime);
        state.daysOfManagement = daysOfManagement;
        state.typeOfDopamineManagement = typeOfDopamineManagement;
        state.reminderNotificationsEnabled = reminderNotificationsEnabled;
        state.infoNotificationsEnabled = infoNotificationsEnabled;
        state.notifications = notifications;
        state.blockedApps = blockedApps;
        state.status = "succeeded";
      })
      .addCase(fetchDopamineManagementData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {
  decrementGlobalTimer,
  decrementCurrentTimer,
  decrementEndsTime,
  checkNotifications,
} = dopamineManagementSlice.actions;

export const getStartCurrentTime = (state: RootState) =>
  state.dopamineManagement.startTimeCurrentTimer;
export const getStartGlobalTime = (state: RootState) =>
  state.dopamineManagement.startTimeGlobalTimer;
export const getEndsTime = (state: RootState) => state.dopamineManagement.endsTime;
export const getTypeOfDopamineManagement = (state: RootState) =>
  state.dopamineManagement.typeOfDopamineManagement;
export const getNotifications = (state: RootState) => state.dopamineManagement.notifications;
export const getBlockedApps = (state: RootState) => state.dopamineManagement.blockedApps;
export const getStatus = (state: RootState) => state.dopamineManagement.status;
export const getDateNow = (state: RootState) => state.dopamineManagement.dateNow;
export const getDaysOfManagement = (state: RootState) => state.dopamineManagement.daysOfManagement;

export default dopamineManagementSlice.reducer;
