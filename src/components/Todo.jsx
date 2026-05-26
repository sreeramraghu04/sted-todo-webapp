const Todo = ({ item, deleteTask }) => {
  return (
    <div className="w-75 bg-black rounded-lg p-8">
      <h1 className="font-semibold">
        {item.id} : {item.taskName}
      </h1>

      <button
        className="bg-blue-800 p-2 rounded mt-6 w-full"
        onClick={() => deleteTask(item.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default Todo;
