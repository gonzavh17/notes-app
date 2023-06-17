import React from "react";
import { Link } from "react-router-dom";
import "../Assets/Note.css";

function NoteCard({ list, deleteNote, index, setSubId }) {
  if (list.length === 0) {
    return <p>No hay ninguna nota.</p>;
  }

  return (
    <div className="note__container">
      <div className="parent">
        <div className="div1">
          <div className="note__number-container">
            <p className="note__number">Nota {index + 1}:</p>
          </div>
        </div>
        <div className="div2">
          <div className="notes" key={list.id}>
            <p className="note__title">{list.title}</p>
          </div>
        </div>
        <div className="div3">
          <div className="notes-btn">
            <button
              className="note__delete-btn"
              onClick={() => deleteNote(list.id)}
            >
              Delete
            </button>
            <Link to={`/note/${list.id}`}>
              <button className="note__detail-btn">View Note</button>
            </Link>

            <Link to={'/noteForm'}>
              <button
                className="note__detail-btn"
                onClick={() => setSubId(list.id)}
              >
                Edit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
{
  /* <div className="note__number-container">
<p className="note__number">Nota: {index + 1}</p>
</div>
<div className="notes" key={list.id}>
  <p className="note__title">{list.title}</p>
  <p className="note__content">{list.content}</p>

  <div className="notes-btn">
    <button className="note__delete-btn" onClick={() => deleteNote(list.id)}>Delete</button>
    <Link  to={`/note/${list.id}`}>
      <button className="note__detail-btn" >View Note</button>
    </Link>
    <button className="note__detail-btn">Edit</button>
  </div>
</div> */
}
