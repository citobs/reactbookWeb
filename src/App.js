import { useState } from "react";
import "./App.css";
import db from "./firebase";

function App() {
  const [bookTitle, setBookTitle] = useState("");
  const [bookPage, setBookPage] = useState("");
  const [bookPublish, setBookPublish] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleBook = async (e) => {
    e.preventDefault();
    setLoading(true);
    //firestore(데이터베이스)에 보내기(비동기설정 await)
    try {
      await db
        .collection("books")
        .add({
          title: bookTitle,
          page: parseInt(bookPage),
          publish: new Date(bookPublish),
          //에러메시지 추가
        })
        .then((docRef) => {
          console.log(docRef);
        });
    } catch (e) {
      setError("에러가 발생했습니다.");
    }

    // db들어가고 나서 초기화
    setBookTitle("");
    setBookPage("");
    setBookPublish("");
    setLoading(false);
  };

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
            placeholder='페이지수'
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
            placeholder='출판일'
            onChange={(e) => setBookPublish(e.target.value)}
          />
        </div>

        {/* 삼항조건문추가 */}
        <button type='submit' onClick={handleBook} disabled={loading}>
          {loading ? "저장중입니다..." : "저장하기"}
        </button>
      </form>
      {error && <p className='error'>{error}</p>}
    </div>
  );
}

export default App;
