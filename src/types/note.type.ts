export type Note = {
  _id: string;
  content: string;
  creator: string;
  updated_At: string;
  categoryName: string;
  __v: number;
};

export type InitialNoteState = {
  loading: boolean;
  notes: Note[];
  error: string;
};
