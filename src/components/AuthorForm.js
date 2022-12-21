import React from "react";
import { Field } from "../ui";

function AuthorForm() {
  return (
    <form>
      <Field labelText='작가이름' id='author-name'>
        <input type='text' name='name' id='author-name' placeholder='이름' />
      </Field>
      <Field labelText='사진' id='author-photo'>
        <input type='file' name='photo' id='author-photo' />
      </Field>
      <Field labelText='설명' id='author-description'>
        {/* <label htmlFor='book-publish-date'>출판일</label> */}
        <textarea
          name='publish-date'
          id='author-description'
          placeholder='설명'
          rows='8'
        />
      </Field>
      {/* 삼항조건문추가 */}
      {/* <button type='submit' onClick={handleBook} disabled={loading}>
          {loading ? "저장중입니다..." : "저장하기"}
        </button> */}
    </form>
  );
}

export default AuthorForm;
