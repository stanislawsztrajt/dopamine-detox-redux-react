import { gql } from "@apollo/client";

export const CREATE_DOPAMINE_MANAGEMENT = gql`
  mutation {
    createDopamineManagementData(data: { typeOfDopamineManagement: "none" }) {
      data {
        id
        attributes {
          typeOfDopamineManagement
          endsTime
          startTimeGlobalTimer
          startTimeCurrentTimer
          reminderNotificationsEnabled
          infoNotificationsEnabled
          blockedApps
          notifications
          daysOfManagement
          createdAt
          updatedAt
        }
      }
    }
  }
`;

export const UPDATE_DOPAMINE_MANAGEMENT = gql`
  mutation ($id: ID!, $data: JSON!) {
    updateDopamineManagementData(id: $id, data: $data) {
      data {
        id
        attributes {
          typeOfDopamineManagement
          endsTime
          startTimeGlobalTimer
          startTimeCurrentTimer
          reminderNotificationsEnabled
          infoNotificationsEnabled
          blockedApps
          notifications
          daysOfManagement
          createdAt
          updatedAt
        }
      }
    }
  }
`;
