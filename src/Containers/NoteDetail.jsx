import React, { useState, useEffect } from 'react'
import Spinner from '../Components/Spinner'
import { useParams } from 'react-router-dom';
import {
    getFirestore,
    doc,
    getDoc
  } from "firebase/firestore";
  import appFirebase from "../firebase-config";
import NoteDetailCard from '../Components/NoteDetailCard';

const NoteDetail = () => {
    const dataBase = getFirestore(appFirebase);
  const { id } = useParams();
  const [noteDetail, setNoteDetail] = useState(null);

  useEffect(() => {
    const getNoteDetail = async () => {
      try {
        const docRef = doc(dataBase, 'notes', id); 
        const docSnap = await getDoc(docRef);
  
        if (docSnap.exists()) {
          const noteData = { ...docSnap.data(), id: docSnap.id };
          setNoteDetail(noteData);
        } else {
          console.log('La nota no existe.');
        }
      } catch (error) {
        console.error('Error al obtener el detalle de la nota:', error);
      }
    };
  
    getNoteDetail();
  }, [id]); //

  // Renderizar el detalle de la nota
  return (
    <div>
      <NoteDetailCard noteDetail={noteDetail}/>
    </div>
  );
};

export default NoteDetail