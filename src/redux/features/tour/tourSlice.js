import { createSlice } from "@reduxjs/toolkit";
import { rolesObj } from "../../../utils/roles";
import {
  AddTour,
  get,
  deleteTour,
  update,
} from "../../../Services/tour.services";

let initialState = {
  tourArr: [],
  tourObj: {},
};
import { toastSuccess, toastError } from "../../../utils/toastUtils";

const tourSlice = createSlice({
  name: "tour",
  initialState: initialState,
  reducers: {
    TOURAdd: async (state, { payload }) => {
      state.tourArr = payload;
      //   console.log(payload, "payload");
      let { data: response } = await AddTour(payload);
      if (response) {
        console.log(response, "respse");
        toastSuccess(response.message);
      }
    },
    tourGet: async (state, { payload }) => {
      let { data: response } = await get(payload);
      if (response) {
        console.log(response, "getget");
        // toastSuccess(response.message);
      }
      state.tourArr = payload;
    },
  },
});

export const { TOURAdd, tourGet } = tourSlice.actions;

export default tourSlice.reducer;
