import React from "react";

function BookAuthors({ book }) {
  return (
    <div className='bookAutors'>
      <h4>
        {book && book.authors
          ? book.authors[0].name
          : "입력된 작가가 존재하지 않습니다."}
      </h4>
    </div>
  );
}

export default BookAuthors;
