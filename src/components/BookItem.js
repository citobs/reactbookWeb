import React from "react";
import { Link } from "react-router-dom";

function BookItem({ book }) {
  return (
    <div className='book-item'>
      <h1>
        <Link to={`/book/${book.id}`}>{book.title}</Link>
      </h1>

      <span>
        <strong> 책 제목 :{""} </strong>
        {book.title}
      </span>
      <br />
      <span>
        <strong> 총 페이지 :{""} </strong>
        {book.page}
      </span>
      <br />

      <span>
        <strong> 출판일 : {""}</strong>
        {new Date(book.publish.toDate()).toLocaleString()}
      </span>
      <br />
      <br />
    </div>
  );
}

export default BookItem;
