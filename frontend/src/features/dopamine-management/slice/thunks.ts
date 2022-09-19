import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IdopamineManagementState } from "src/utils/types/interfaces";

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

export default fetchDopamineManagementData;
