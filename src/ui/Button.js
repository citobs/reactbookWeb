function Button({ loading, ...rest }) {
  return (
    <button {...rest} disabled={loading}>
      {loading ? "저장중입니다" : rest.children}{" "}
    </button>
  );
}

export default Button;
