import React from "react";
import Spinner from "./Spinner";
import "../Assets/NoteDetail.css";
import { Link } from "react-router-dom";

function NoteDetailCard({ noteDetail }) {
  return (
    <div className="note-detail__parent">
      {noteDetail ? (
        <div>
          <div className="note-detail__container">
            <p className="note-detail__title">{noteDetail.title}</p>
            <p className="note-detail__content">{noteDetail.content}</p>
          </div>

          <div className="note-detail__btn">
            <Link to={"/noteForm"}>
              <button className="home__btn">Editar</button>
            </Link>

            <Link to={"/"}>
              <button className="home__btn">Home</button>
            </Link>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default NoteDetailCard;
