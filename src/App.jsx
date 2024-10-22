import { useState } from "react";
import "./index.css";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "React",
      descrption: "what a beautifull technology",
      isComplete: false,
    },
    {
      id: "2",
      title: "Angular",
      descrption: "what a beautifull Onother One",
      isComplete: false,
    },
    {
      id: "3",
      title: "Vue",
      descrption: "what a beautifull Third One",
      isComplete: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isComplete: !task.isComplete }; 
      }
      return task;
    });
    setTasks(newTask);
  }
  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className=" text-3xl text-slate-100 font-bold text-center">
          Gerenciar Tarefas
        </h1>
        <AddTasks/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  );
}

export default App;
