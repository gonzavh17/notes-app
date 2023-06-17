import React, { useState } from "react";
import "../Assets/Form.css";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  Timestamp
} from "firebase/firestore";
import appFirebase from "../firebase-config";
import NoteList from "./NoteList";
import { Link } from "react-router-dom";

function FormContainer() {
  const db = getFirestore(appFirebase);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postUpdate, setPosUpdate] = useState(false);
  const [subId, setSubId] = useState("");

  const saveNote = async (e) => {
    e.preventDefault();

    if (subId === "") {
      try {
        await addDoc(collection(db, "notes"), {
          title: title,
          content: content,
        });
      } catch (error) {
        console.error();
      }
    } else {
      await setDoc(doc(db, "notes", subId), {
        title: title,
        content: content,
      });
    }

    
    /* Agregar alert para corroborar que la nota fue subida exitosamente */

    setTitle("");
    setContent("");
    setSubId("");
  };

  const handleUpdate = () => {
    if (postUpdate === true) {
      setPosUpdate(false);
    } else {
      setPosUpdate(true);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  };


  return (
    <div className="form-parent">
      <div className="form-container">
        <p className="form-title">Escribe tu nota</p>
        <div className="form">
          <form className="form-child" onSubmit={saveNote}>
            <label className="label" htmlFor="">Title:</label>
            <input
              className="form-input form-input-title"
              type="text"
              name=""
              id=""
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <label className="label" htmlFor="">Content:</label>
            <textarea
              className="form-input form-textarea"
              type="text"
              name=""
              id=""
              placeholder="Content"
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />

            <button onClick={handleUpdate} type="submit">
              {subId === "" ? "Save Note" : "Update"}
            </button>
          </form>
        </div>
        <Link to={"/"}>
          <button className="home__btn">Volver a Home</button>
        </Link>

        <div className="note__none">
          <NoteList
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            postUpdate={postUpdate}
            subId={subId}
            setSubId={setSubId}
          />
        </div>
      </div>
    </div>
  );
}

export default FormContainer;
