import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  AddQuotation,
  get,
  deleteQuotation,
  update,
} from "../../../Services/quotation.service";

let initialState = {
  quotationArr: [],
  quotationObj: {},
};

import { toastSuccess, toastError } from "../../../utils/toastUtils";

export const quotationGet = createAsyncThunk(
  "auth/quotationGet",
  async (payload) => {
    try {
      // console.log(payload,"payloadpayload21")
      let { data: response } = await get(payload);
      // console.log(response, "responsess");
      return response;
    } catch (error) {
      toastError(error);
      throw error;
    }
  }
);
// export const quotationUpdate = createSlice(
//   "auth/quotationUpdate",
//   async (payload) => {
//     try {
//       // console.log(payload,"payloadpayload21")
//       let { data: response } = await update(payload);

//       console.log(response, "responses323");
//       return response;
//     } catch (error) {
//       toastError(error);
//       throw error;
//     }
//   }
// );

// export const setObj = createSlice({
//   name: "quotation",
//   initialState: initialState,
//   reducers: {
//     setObj4: (state, { payload }) => {
//       state.quotationObj = payload;
//       console.log(state, "state7");
//     },
//     // quotationUpdateObj: async (state, { payload }) => {
//     //   // state.quotationObj = payload;

//     //   let { data: response } = await update(payload);
//     //   if (response) {
//     //     console.log(response, "respse83");
//     //     toastSuccess(response.message);
//     //   }
//     // },
//   },
// });
// export const setObj = (state, { payload }) => {
//   console.log(payload, "payload3");
//   state.quotationObj = payload;
//   console.log(state, "state7");
// };

// export const quotationUpdate = createSlice({
//   name: "quotationObj",
//   initialState: initialState,
//   reducers: {
//     setObj: (state, { payload }) => {
//       console.log(payload, "payload3");
//       state.quotationObj = payload;
//       console.log(state, "state7");
//     },
//     quotationUpdateObj: async (state, { payload }) => {
//       // state.quotationObj = payload;

//       let { data: response } = await update(payload);
//       if (response) {
//         console.log(response, "respse83");
//         toastSuccess(response.message);
//       }
//     },
//   },
// });
// export const quotationDelete = createAsyncThunk(
//   "auth/quotationDelete",
//   async (payload) => {
//     try {
//       // console.log(payload,"payloadpayload21")
//       let { data: response } = await deleteQuotation(payload);
//       console.log(response, "responsess");
//       return response;
//     } catch (error) {
//       toastError(error);
//       throw error;
//     }
//   }
// );

const quotationSlice = createSlice({
  name: "quotation",
  initialState: initialState,
  reducers: {
    quotationAdd: async (state, { payload }) => {
      state.quotationArr = payload;

      let { data: response } = await AddQuotation(payload);
      if (response) {
        console.log(response, "respse1");
        toastSuccess(response.message);
      }
    },

    // quotationUpdate: async (state, { id, payload }) => {
    //   state.quotationObj = payload;
    //   console.log(payload, "payload23"); //whole doc com
    //   console.log(id, "idid");

    //   let { data: response } = await update(id, payload);
    //   if (response) {
    //     // console.log(response, "response34");
    //     toastSuccess(response.message);
    //   }
    // },
    quotationDelete: async (state, { payload }) => {
      // console.log(payload, "payload-dele");
      let { data: response } = await deleteQuotation(payload);
      // console.log(response, "response-dele");
      if (response) {
        toastSuccess(response.message);
      }
    },
    setObj: (state, { payload }) => {
      // console.log(payload, "payload3");
      state.quotationObj = payload;
      // console.log(state, "state7");
    },
    quotationUpdateObj: async (state, { payload }) => {
      // state.quotationObj = payload;
      // console.log(payload, "payload");
  
      let { data: response } = await update(payload, payload.id);
      if (response) {
      
        toastSuccess(response.message);
      }
    },
  },

  extraReducers: {
    [quotationGet.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [quotationGet.fulfilled]: (state, { payload }) => {
      console.log(payload, "payload12");
      state.quotationArr = payload.data;
    },
    [quotationGet.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.isAuthorized = false;
    },
    //
    // [quotationUpdate.pending]: (state, action) => {
    //   state.loading = true;
    //   state.error = false;
    // },
    // [quotationUpdate.fulfilled]: (state, { payload }) => {
    //   console.log(payload, "payload123");
    //   state.quotationArr = payload.data;
    // },
    // [quotationUpdate.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = true;
    //   state.isAuthorized = false;
    // },
    // //
    // [quotationDelete.pending]: (state, action) => {
    //   state.loading = true;
    //   state.error = false;
    // },
    // [quotationDelete.fulfilled]: (state, { payload }) => {
    //   console.log(payload, "payload12");
    //   state.quotationArr = payload.data;
    // },
    // [quotationDelete.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.error = true;
    //   state.isAuthorized = false;
    // },
  },
});

export const {
  quotationAdd,
  quotationDelete,
  // quotationUpdate
  setObj,
  quotationUpdateObj,
} = quotationSlice.actions;
export default quotationSlice.reducer;
