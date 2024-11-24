import { Check } from "lucide-react";

function Checkbox({ isChecked, onClick }) {
  return (
    <div
      className={`flex items-center justify-center h-5 w-5 border rounded ${
        isChecked ? "bg-highlight border-highlight" : "border-slate-300"
      }`}
      onClick={onClick}
    >
      {isChecked && (
        <Check strokeWidth={3} size={15} className="text-white pt-[2px]" />
      )}
    </div>
  );
}

export default Checkbox;
