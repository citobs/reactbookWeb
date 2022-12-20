import React from "react";

function BookItem({ book }) {
  return (
    <div className='book-item'>
      <br />
      <strong>책제목 : {""}</strong> {book.title}
      <br />
      <span>
        <strong>페이지 수 : {""}</strong>
        {book.pages}
      </span>
      <br />
      <span>
        <strong>출판일 : {""}</strong>
        {new Date(book.publishDate.toDate()).toLocaleString()}
      </span>
    </div>
  );
}

export default BookItem;
