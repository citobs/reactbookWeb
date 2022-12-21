import React from "react";

function BookGeneral({ book }) {
  return (
    <div className='bookGeneral'>
      <h4>{book && book.title}</h4>
    </div>
  );
}

export default BookGeneral;
