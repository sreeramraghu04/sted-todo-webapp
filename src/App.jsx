import { useEffect, useState } from "react";
import Todo from "./components/Todo";

// Local Storage
const localData = () => {
  const list = localStorage.getItem("data");
  return list ? JSON.parse(list) : [];
};

function App() {
  const [todo, setTodo] = useState(localData());
  const [task, setTask] = useState("");

  // Save to Local Storage
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(todo));
  }, [todo]);

  // Add Task
  const addTask = () => {
    if (!task) {
      alert("Enter a task");
      return;
    }
    const newTask = {
      id: todo.length + 1,
      taskName: task,
      isCompleted: false,
    };
    setTodo([...todo, newTask]);
    setTask("");
  };

  // Update Task
  const updateTask = (id) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, isCompleted: true } : item,
      ),
    );
  };

  // Delete Task
  const deleteTask = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  return (
    <div className="place-items-center bg-linear-to-b from-fuchsia-900 to-slate-950 min-h-screen pt-14 text-white">
      <div className="flex bg-white p-4 w-[320px] rounded-md">
        <input
          className="w-full p-2 text-black"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button className="px-6 bg-fuchsia-900 rounded" onClick={addTask}>
          Add
        </button>
      </div>

      <div className="m-6 flex flex-wrap gap-8 justify-center">
        {todo.map((item) => (
          <Todo
            key={item.id}
            item={item}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
