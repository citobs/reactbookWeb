import styled from "styled-components";

const ButtonStyled = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  background-color: black;
  cursor: pointer;
`;

function Button({ loading, ...rest }) {
  return (
    <ButtonStyled {...rest} disabled={loading}>
      {loading ? "저장중입니다" : rest.children}{" "}
    </ButtonStyled>
  );
}

export default Button;
