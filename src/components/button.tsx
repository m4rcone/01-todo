import { CirclePlus } from "lucide-react";

export function Button({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="bg-blue-dark hover:bg-blue flex cursor-pointer items-center gap-2 rounded-lg p-4 text-sm font-bold text-gray-100 transition-colors duration-100 disabled:bg-gray-300"
      {...props}
    >
      Criar
      <CirclePlus size={16} />
    </button>
  );
}
