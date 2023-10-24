const Button = ({ children, version, type, isDisabled, handleClick }: any) => {
  return (
    <button
      onClick={handleClick}
      type={type}
      disabled={isDisabled}
      className={`btn btn-${version ?? "primary"}`}
    >
      {children}
    </button>
  );
};

export default Button;
