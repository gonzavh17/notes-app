import "./App.css";
import NavBar from "./Components/NavBar";
import NoteCard from "./Components/NoteCard";
import NoteDetailCard from "./Components/NoteDetailCard";
import NoteDetail from "./Containers/NoteDetail";
import NoteForm from "./Containers/NoteForm";
import NoteList from "./Containers/NoteList";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App({ children }) {
  return (
    <div className="app">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noteForm" element={<NoteForm />}></Route>
          <Route path="/note/:id" element={<NoteDetail />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
