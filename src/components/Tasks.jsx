import { ChevronsRightIcon, TrashIcon } from "lucide-react";

function Tasks({tasks,onTaskClick,onDeleteTaskClick}) {
  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {
         tasks.map((task) => (
            <li key={task.id} className="flex gap-2">
              <button 
                onClick={() =>onTaskClick(task.id)} 
                className={`bg-slate-400 w-full text-white text-left p-2 rounded-md ${task.isComplete ? 'line-through' : ''}`}
              >
                {task.title}
              </button>
              <button className="bg-slate-400 text-white p-2 rounded-md">
                <ChevronsRightIcon />
              </button>
              <button onClick={()=>onDeleteTaskClick(task.id)} className="bg-slate-400 text-white p-2 rounded-md">
                <TrashIcon/>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Tasks;
