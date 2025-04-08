import { useEffect, useState, useCallback } from "react";
import { EmptyList } from "./components/empty-list";
import { Header } from "./components/header";
import { Input } from "./components/input";
import { TaskInfos } from "./components/task-infos";
import { TaskList } from "./components/task-list";
import { Button } from "./components/Button";
import { v4 as uuid } from "uuid";

export interface Task {
  id: string;
  content: string;
  isCompleted: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const countCompletedTasks = useCallback(() => {
    const tasksCompleted = tasks.filter((task) => task.isCompleted === true);
    setCompletedTaskCount(tasksCompleted.length);
  }, [tasks]);

  useEffect(() => {
    countCompletedTasks();
  }, [countCompletedTasks]);

  function handleAddTask() {
    const newTask = {
      id: uuid(),
      content: inputValue,
      isCompleted: false,
    };

    setTasks((prevState) => [...prevState, newTask]);
    setInputValue("");
  }

  function handleDeleteTask(id: string) {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  }

  function toogleTaskStatus(id: string) {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  }

  return (
    <div className="flex min-h-screen max-w-screen flex-col items-center bg-gray-600">
      <Header />
      <div className="mt-[-1.75rem] flex w-full flex-col gap-16 px-4 sm:max-w-[736px]">
        <div className="flex items-center gap-2">
          <Input
            onChange={(event) => setInputValue(event.target.value)}
            value={inputValue}
            name="newTask"
            type="text"
            placeholder="Adicione uma nova tarefa"
          />
          <Button onClick={handleAddTask} disabled={inputValue === ""} />
        </div>
        <div className="flex flex-col gap-6 pb-4">
          <TaskInfos
            tasksCounter={tasks.length}
            completedTaskCount={completedTaskCount}
          />
          {tasks.length !== 0 ? (
            <TaskList
              tasks={tasks}
              handleDeleteTask={handleDeleteTask}
              toogleTaskStatus={toogleTaskStatus}
            />
          ) : (
            <EmptyList />
          )}
        </div>
      </div>
    </div>
  );
}
