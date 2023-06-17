import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  getDoc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import appFirebase from "../firebase-config";
import Spinner from "../Components/Spinner";
import NoteCard from "../Components/NoteCard";

function NoteList({postUpdate, title, setTitle, content, setContent, subId, setSubId}) {
  const dataBase = getFirestore(appFirebase);
  const [list, setList] = useState([]);
  const [deleteUpdate, setDeleteUpdate] = useState(false);
  

  useEffect(() => {
    const getList = async () => {
      try {
        const querySnapshot = await getDocs(collection(dataBase, "notes"));
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setList(docs);
      } catch (error) {
        console.log(error);
      }
    };
    getList();
    console;
  }, [postUpdate, deleteUpdate]);

  const deleteNote = async (id) => {
    await deleteDoc(doc(dataBase, "notes", id));

    if (deleteUpdate === true) {
      setDeleteUpdate(false);
    } else setDeleteUpdate(true);
  };

  const getOne = async (id) => {
    try {
      const docRef = doc(dataBase, "notes", id);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      setTitle(data.title); 
      setContent(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(subId !== ''){
      getOne(subId)
    }
  }, [subId])

  return (
    <div>
      {list.length === 0 ? (
        <p>No hay ninguna nota. Haz <Link to={"/noteForm"}>click</Link> si quieres crear una nueva nota</p>
      ) : (
        list.map((list, index) => (
          <NoteCard key={list.id} list={list} deleteNote={deleteNote} index={index} setSubId={setSubId}/>
        ))
      )}
    </div>
  );
}

export default NoteList;

