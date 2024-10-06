import "./Button.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "success";
  onClick: () => void;
}
// bootstrap styles
// {"btn btn-" + color}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button type="button" className="button button-primary" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
