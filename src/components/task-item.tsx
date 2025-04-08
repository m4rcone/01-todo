import { Check, Trash2 } from "lucide-react";
import type { Task } from "../App";

interface TaskItemProps {
  task: Task;
  handleDeleteTask: (id: string) => void;
  toogleTaskStatus: (id: string) => void;
}

export function TaskItem({
  task,
  handleDeleteTask,
  toogleTaskStatus,
}: TaskItemProps) {
  return (
    <li className="flex items-start justify-between rounded-lg border border-gray-400 bg-gray-500 p-4 text-gray-100">
      <div className="flex items-start gap-3">
        <label htmlFor={`checkbox-${task.id}`} className="cursor-pointer">
          <input
            id={`checkbox-${task.id}`}
            type="checkbox"
            className="peer sr-only"
            defaultChecked={task.isCompleted}
            onChange={() => toogleTaskStatus(task.id)}
          />
          <span className="peer-checked:hover:bg-purple peer-checked:bg-purple-dark border-blue hover:border-blue-dark hover:bg-blue-dark/20 flex h-6 w-6 items-center justify-center rounded-full border-2 transition-colors duration-150 peer-checked:border-none">
            {task.isCompleted && <Check size={12} />}
          </span>
        </label>
        <p className={task.isCompleted ? "text-gray-300 line-through" : ""}>
          {task.content}
        </p>
      </div>
      <button onClick={() => handleDeleteTask(task.id)}>
        <Trash2 className="hover:text-danger min-w-6 cursor-pointer rounded-sm p-1 text-gray-300 transition-colors duration-150 hover:bg-gray-400" />
      </button>
    </li>
  );
}
