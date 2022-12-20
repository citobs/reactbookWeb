import React from "react";

function BookItem({ book }) {
  return (
    <div className='book-item'>
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
    </div>
  );
}

export default BookItem;
