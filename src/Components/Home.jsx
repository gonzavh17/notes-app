import React from "react";
import "../Assets/Home.css";
import NoteList from "../Containers/NoteList";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home__parent">
      <div className="home__container">
        <p className="home__title">Bienvenido a SimpleNote!</p>

        <p className="home__description">La manera mas simple de tomar notas.</p>

        <p>Comienza ahora mismo a crear tu primera nota!</p>
        <Link to={"/noteForm"}>
          <button className="home__btn">Crear o editar notas</button>
        </Link>

        <h3>Mis notas:</h3>

        <div>
          <NoteList />
        </div>
      </div>
    </div>
  );
}

export default Home;

