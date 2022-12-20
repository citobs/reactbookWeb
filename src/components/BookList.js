import React, { useEffect, useState } from "react";
import db from "../firebase";
import BookItem from "./BookItem";

function BookList() {
  const [books, setBooks] = useState(null);

  //DB데이터 가져오기

  //찰칵찍어서(onSnapshot) mapping을 새로 해줄거야!
  useEffect(() => {
    db.collection("books").onSnapshot((snapshot) =>
      setBooks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      )
    );
  }, []);
  return (
    <div className='bookList'>
      <h2>book list</h2>

      {/* 매핑 */}
      {books.map((book) => (
        <BookItem book={book} />
      ))}
    </div>
  );
}

export default BookList;
