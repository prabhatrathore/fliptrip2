import { createSlice } from "@reduxjs/toolkit";
import { rolesObj } from "../../../utils/roles";
import {
  AddQuotation,
  get,
  deleteQuotation,
  update,
} from "../../../Services/quotation.service";

let initialState = {
  QuotationArr: [],
  quotationObj: {},
};
// import { getDefaultMiddleware } from "@reduxjs/toolkit";
import { toastSuccess, toastError } from "../../../utils/toastUtils";

// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false,
// });

const quotationSlice = createSlice({
  name: "quotation",
  initialState: initialState,
  reducers: {
    quotationAdd: async (state, { payload }) => {
      console.log("quotation");
      state.QuotationArr = payload;
      console.log(payload, "payload");
      let { data: response } = await AddQuotation(payload);
      if (response) {
        console.log(response, "respse");
        toastSuccess(response.message);
      }
    },
    quotationGet: async (state, { payload }) => {
      let { data: response } = await get(payload);
      if (response) {
        console.log(response, "getget");
      }
      state.QuotationArr = payload;
    },
    quotationUpdate: async (state, { id, payload }) => {
      let { data: response } = await update(id, payload);
      if (response) {
      }
    },
    quotationDelete: async (state, { payload }) => {
      let { data: response } = await deleteQuotation(payload);
      if (response) {
      }
    },
  },
});

export const { quotationAdd, quotationGet, quotationUpdate, quotationDelete } =
  quotationSlice.actions;

export default quotationSlice.reducer;
