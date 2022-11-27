import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { baseURL } from "../../helper/app-helper";
// import { Note } from "../../types";
// import { InitialNoteState } from "../../types";

type Note = {
  _id: string;
  content: string;
  creator: string;
  updated_At: string;
  categoryName: string;
  __v: number;
};

type InitialNoteState = {
  loading: boolean;
  notes: Note[];
  error: string;
};

const initialNoteState: InitialNoteState = {
  loading: false,
  notes: [],
  error: "",
};

export const fetchNotes = createAsyncThunk("note/fetchNotes", async () => {
  let userId = localStorage.getItem("userId");
  const response = await axios.get(baseURL + `reactnotes/${userId}`);
  return response.data.usernotes;
});

const noteSlice = createSlice({
  name: "note",
  initialState: initialNoteState,
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
