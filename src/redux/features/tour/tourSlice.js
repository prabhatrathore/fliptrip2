import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { rolesObj } from "../../../utils/roles";
import {
  AddTour,
  get,
  tourDelete,
  update,
} from "../../../Services/tour.services";

let initialState = {
  tourArr: [],
  tourObj: {},
};
import { toastSuccess, toastError } from "../../../utils/toastUtils";

export const tourGet = createAsyncThunk("auth/tourGet", async (payload) => {
  try {
    // let { data: res } = await login(payload);
    // let decodedToken = await jwtDecode(res.token);
    // localStorage.setItem("AUTH_TOKEN", res.token);
    // tourGet: async (state, { payload }) => {
    // console.log(payload, "payload");
    let { data: response } = await get(payload);
    if (response) {
      console.log(response, "getget");
      // let e = (state.tourArr = response.data);
      // console.log(e, "state");
    }
    return response;
    // return state;
    // },
  } catch (error) {
    toastError(error);
    throw error;
  }
});

const tourSlice = createSlice({
  name: "tour",
  initialState: initialState,
  reducers: {
    TOURAdd: async (state, { payload }) => {
      state.tourArr = payload;
      //   console.log(payload, "payload");
      let { data: response } = await AddTour(payload);
      if (response) {
        // console.log(response, "respse");
        toastSuccess(response.message);
      }
    },
    setObj: (state, { payload }) => {
      // console.log(payload, "setobj3");
      state.tourObj = payload;
      // console.log(state, "state7");
    },
    tourUpdate: async (state, { payload }) => {
      // state.quotationObj = payload;
      // console.log(payload, "payload");

      let { data: response } = await update(payload, payload.id);
      if (response) {
        toastSuccess(response.message);
      }
    },
    deleteTour: async (state, { payload }) => {
      // console.log(payload, "payload-dele");
      let { data: response } = await tourDelete(payload);
      // console.log(response, "response-dele");
      if (response) {
        toastSuccess(response.message);
      }
    },
  },
  extraReducers: {
    [tourGet.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [tourGet.fulfilled]: (state, { payload }) => {
      console.log(payload, "payload2222");
      state.tourArr = payload.data;
    },
    [tourGet.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.token = null;
      state.isAuthorized = false;
    },
  },
});

export const { TOURAdd, tourUpdate, setObj, deleteTour } = tourSlice.actions;

export default tourSlice.reducer;
