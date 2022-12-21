import styled, { css } from "styled-components";

const Pstyled = styled.p`
  padding: 10px;
  border: 1px solid lightgray;
  background: #f0f0f0;
  border-radius: 6px;

  ${(props) => {
    if (props.type === "error")
      return css`
        border-color: transparent;
        background-color: Tomato;
        color: white;
      `;
    else if (props.type === "success")
      return css`
        border-color: transparent;
        background-color: yellow;
        color: black;
      `;
  }}
`;

function Message({ error, type }) {
  return <>{error && <Pstyled type={type}> {error}</Pstyled>}</>;
}

export default Message;
