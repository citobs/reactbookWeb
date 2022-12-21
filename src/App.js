import { useState } from "react";
import "./App.css";
import BookList from "./components/BookList";
// import db from "./firebase";
// import { Button, Field, Message, Modal } from "./ui";
import "./styles.css";
import AddBook from "./components/AddBook";
import Toaster from "./ui/Toaster";
import { ToasterContext, ToasterProvider } from "./ui/ToasterContext";

function App() {
  // const [toasts, setToasts] = useState([]);

  return (
    <ToasterProvider>
      <div className='App'>
        <h1>CIT도서대출 프로그래밍!!!(리액트 겁나어렵)</h1>

        <BookList />
      </div>
    </ToasterProvider>
  );
}

export default App;
