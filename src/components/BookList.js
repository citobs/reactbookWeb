import React from "react";
import db from "../firebase";
import { useState } from "react";
import { useEffect } from "react";
import BookItem from "./BookItem";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    db.collection("books")
      // .orderBy("publishDate", "desc")
      .onSnapshot((snapshot) =>
        setBooks(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className='booklist'>
      <h2>Book list</h2>
      {/* {!books.length
        ? "북 리스트가 존재하지 않습니다"
        : books.map((book) => <BookItem book={book} key={book.id} />)} */}

      {books.map((book) => (
        <BookItem book={book} />
      ))}
    </div>
  );
}

export default BookList;
