import type { Task } from "../App";
import { TaskItem } from "./task-item";

interface TaskListProps {
  tasks: Task[];
  handleDeleteTask: (id: string) => void;
  toogleTaskStatus: (id: string) => void;
}

export function TaskList({
  tasks,
  handleDeleteTask,
  toogleTaskStatus,
}: TaskListProps) {
  return (
    <ul className="flex flex-col gap-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          handleDeleteTask={handleDeleteTask}
          toogleTaskStatus={toogleTaskStatus}
        />
      ))}
    </ul>
  );
}
