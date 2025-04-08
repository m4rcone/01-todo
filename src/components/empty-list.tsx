import { ClipboardList } from "lucide-react";

export function EmptyList() {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg border-t border-t-gray-400 py-16">
      <ClipboardList className="h-14 w-14 text-gray-400" strokeWidth={1} />
      <div className="text-center text-gray-300">
        <p className="font-bold">Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
