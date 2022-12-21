import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 280px;
`;

const Toast = styled.div`
  background: #fefefe;
  border: #ccc 1px solid;
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
  padding: 15px;
  margint-top: 15px;
`;

function Toaster({ toasts }) {
  return (
    <Wrapper>
      {toasts.map((toast) => (
        <Toast className='toast'>{toast}</Toast>
      ))}
    </Wrapper>
  );
}

export default Toaster;
