type ButtonType = "button" | "submit" | "reset";

type ButtonProps = {
  text: string;
  type?: ButtonType;
  onClick?: () => void;
};

function Button({ text, type = "button", onClick }: ButtonProps) {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;

