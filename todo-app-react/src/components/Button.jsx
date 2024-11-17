import { Plus } from "lucide-react";

const Button = ({ onClick, label, iconName }) => {
  const Icon = iconName;

  return (
    <button onClick={onClick} className="btn-primary">
      {Icon && <Icon size={20} />}
      <span>{label}</span>
    </button>
  );
};

export default Button;
