// import axios from "axios";
// import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// import { baseURL } from "../../helper/app-helper";

// type User = {
//   _id: string;
//   content: string;
//   creator: string;
//   updated_At: string;
//   categoryName: string;
//   __v: number;
// };
// type InitialState = {
//   loading: boolean;
//   users: User[];
//   error: string;
// };
// const initialState: InitialState = {
//   loading: false,
//   users: [],
//   error: "",
// };

// // Generates pending, fulfilled and rejected action types
// export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
//   let userId = localStorage.getItem("userId");
//   return axios
//     .get(baseURL + `reactnotes/${userId}`)
//     .then((response) => response.data.usernotes);
// });

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchUsers.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(
//       fetchUsers.fulfilled,
//       (state, action: PayloadAction<User[]>) => {
//         state.loading = false;
//         state.users = action.payload;
//         state.error = "";
//       }
//     );
//     builder.addCase(fetchUsers.rejected, (state, action) => {
//       state.loading = false;
//       state.users = [];
//       state.error = action.error.message || "Something went wrong";
//     });
//   },
// });

// export default userSlice.reducer;

import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { baseURL } from "../../helper/app-helper";

type Note = {
  _id: string;
  content: string;
  creator: string;
  updated_At: string;
  categoryName: string;
  __v: number;
};
type InitialState = {
  loading: boolean;
  notes: Note[];
  error: string;
};
const initialState: InitialState = {
  loading: false,
  notes: [],
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchNotes = createAsyncThunk("note/fetchNotes", () => {
  let userId = localStorage.getItem("userId");
  return axios
    .get(baseURL + `reactnotes/${userId}`)
    .then((response) => response.data.usernotes);
});

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNotes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchNotes.fulfilled,
      (state, action: PayloadAction<Note[]>) => {
        state.loading = false;
        state.notes = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchNotes.rejected, (state, action) => {
      state.loading = false;
      state.notes = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default noteSlice.reducer;
