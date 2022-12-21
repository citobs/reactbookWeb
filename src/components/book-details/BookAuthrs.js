import React from "react";
import AuthorForm from "../AuthorForm";

function BookAuthors({ book }) {
  return (
    <div className='bookAutors'>
      <h1>작가정보</h1>
      <p>
        {book && book.authors
          ? book.authors[0].name
          : "입력된 작가가 존재하지 않습니다."}
      </p>
      <hr />
      <h4>작가추가하기</h4>
      <AuthorForm />
    </div>
  );
}

export default BookAuthors;
