import React, { useEffect, FC } from "react";
import { redirect } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { fetchNotes } from "../features/note/noteSlice";

const Home: FC = () => {
  const note = useAppSelector((state) => state.note);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const checkToken = () => {
    let token = localStorage.getItem("Token");
    console.log("token in storage" + token);
    if (token === undefined || token === null || token.length === 0) {
      window.location.href = "/login";
    } else {
      return redirect("/");
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("Token");
    redirect(`/login`);
  };

  return (
    <div>
      SecureHome
      <form onSubmit={handleLogout}>
        <button type="submit">Logout</button>
        <div>
          <h2>List of Users</h2>
          {note.loading && <div>Loading...</div>}
          {!note.loading && note.error ? <div>Error: {note.error}</div> : null}
          {!note.loading && note.notes.length ? (
            <ul>
              {note.notes.map((note) => (
                <li key={note._id}>{note.content}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default Home;
