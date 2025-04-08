export function TaskInfos({
  tasksCounter,
  completedTaskCount,
}: {
  tasksCounter: number;
  completedTaskCount: number;
}) {
  return (
    <header className="flex w-full items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-blue text-sm font-bold">Tarefas criadas</span>
        <span className="rounded-full bg-gray-400 px-2 py-0.5 text-xs font-bold text-gray-200">
          {tasksCounter}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-purple text-sm font-bold">Concluídas</span>
        <span className="rounded-full bg-gray-400 px-2 py-0.5 text-xs font-bold text-gray-200">
          {completedTaskCount}
        </span>
      </div>
    </header>
  );
}
