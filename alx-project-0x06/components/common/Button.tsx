// components/common/Button.tsx

interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  buttonSize?: string;
  action?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  buttonLabel,
  buttonBackgroundColor = "blue",
  buttonSize = "medium",
  action,
}) => {
  const bgColor = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    orange: "bg-orange-500",
    green: "bg-green-500",
  }[buttonBackgroundColor];

  return (
    <button
      onClick={action}
      className={`text-white px-4 py-2 rounded ${bgColor} text-${buttonSize}`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
