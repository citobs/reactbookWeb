import { useState } from "react";
import "./App.css";

function App() {
  const [bookTitle, setBookTitle] = useState("");
  const [bookPage, setBookPage] = useState("");
  const [bookPublish, setBookPublish] = useState("");

  return (
    <div className='App'>
      <h1>앱매인임</h1>
      <form>
        <div>
          <label htmlFor='book-title'>제목</label>
          <input
            type='text'
            name='name'
            id='book-title'
            value={bookTitle}
            placeholder='제목'
            onChange={(e) => setBookTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor='book-pages'>페이지수</label>
          <input
            type='number'
            name='pages'
            id='book-pages'
            value={bookPage}
            placeholder='제목'
            onChange={(e) => setBookPage(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor='book-publish-date'>출판일</label>
          <input
            type='date'
            name='publish-date'
            id='book-publish-date'
            value={bookPublish}
            placeholder='제목'
            onChange={(e) => setBookPublish(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default App;
