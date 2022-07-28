export interface IstartDopamineManagement {
  endsTime: Date;
  daysOfManagement: number;
  typeOfDopamineManagement: "detox" | "limit" | "none";
  reminderNotificationsEnabled: boolean;
  infoNotificationsEnabled: boolean;
  blockedApps: string[];
}

export interface IdopamineManagementState extends IstartDopamineManagement {
  startTimeCurrentTimer: Date;
  startTimeGlobalTimer: Date;
  dateNow: number;
  notifications: {
    notification: string;
    date: string;
  }[];

  status: "idle" | "loading" | "succeeded" | "failed";
  error: boolean;
}

export interface Iuser {
  username: string;
  email: string;
}

export interface IsignUpValues {
  username: string;
  email: string;
  password: string;
  repeatedPassword: string;
}

export interface IsignUp {
  username: string;
  email: string;
  password: string;
}

export interface IsignUpVariables extends IsignUp {
  dopamine_management_datum: number;
}

export interface IloginValues {
  identifier: string;
  password: string;
}
