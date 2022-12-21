import React from "react";

import { useState } from "react";
import { Button, Field, Message, Modal } from "../ui";
import db from "../firebase";
import { ToasterContext } from "../ui/ToasterContext";
import { useNavigate } from "react-router-dom";

function EditBook({ book, id }) {
  const [bookTitle, setBookTitle] = useState(book.title);
  const [bookPage, setBookPage] = useState(book.pages);
  const [bookPublish, setBookPublish] = useState(book.publish);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //   const history = useNavigate();

  // const [books, setBooks] = useState(null);

  //book데이터 확인
  // console.log(books);

  const handleBook = async (addToast, e) => {
    e.preventDefault();
    setLoading(true);
    //firestore(데이터베이스)에 보내기(비동기설정 await)
    try {
      await db
        .collection("books")
        .doc(id)
        .set(
          {
            title: bookTitle,
            page: parseInt(bookPage),
            publish: new Date(bookPublish),
            //에러메시지 추가
          },
          { merge: true }
        );

      addToast({ text: "성공적으로 수정되었습니다.", type: "success" });

      //   setToasts(["성공했습니다 by CIT"]);
    } catch (e) {
      addToast({ text: "수정에 실패했습니다..", type: "error" });
      setError("수정에 실패했습니다.");
      setTimeout(() => {
        setError(null);
      }, 3000);
    }

    // db들어가고 나서 초기화
    // setBookTitle("");
    // setBookPage("");
    // setBookPublish("");
    setLoading(false);
  };

  return (
    <ToasterContext.Consumer>
      {({ addToast }) => (
        <>
          <form onSubmit={handleBook.bind(this, addToast)}>
            <Field labelText='CIT도서제목' id='book-title'>
              {/* <label htmlFor='book-title'>제목</label> */}
              <input
                type='text'
                name='name'
                id='book-title'
                value={bookTitle}
                placeholder='제목'
                onChange={(e) => setBookTitle(e.target.value)}
              />
            </Field>
            <Field labelText='페이지수' id='book-pages'>
              {/* <label htmlFor='book-pages'>페이지수</label> */}
              <input
                type='number'
                name='pages'
                id='book-pages'
                value={bookPage}
                placeholder='페이지수'
                onChange={(e) => setBookPage(e.target.value)}
              />
            </Field>
            <Field labelText='출판일' id='book-publish-date'>
              {/* <label htmlFor='book-publish-date'>출판일</label> */}
              <input
                type='date'
                name='publish-date'
                id='book-publish-date'
                value={bookPublish}
                placeholder='출판일'
                onChange={(e) => setBookPublish(e.target.value)}
              />
            </Field>
            {/* 삼항조건문추가 */}
            {/* <button type='submit' onClick={handleBook} disabled={loading}>
          {loading ? "저장중입니다..." : "저장하기"}
        </button> */}
            <Button type='submit' disabled={loading}>
              {loading ? "저장중입니다..." : "저장하기"}
            </Button>
            <Message text={error} type='error' />
          </form>
        </>
      )}
    </ToasterContext.Consumer>
  );
}

export default EditBook;
