import React from "react";
import Todo from "./Todo.jsx";
function App() {
  const [todoValue, setTodoValue] = React.useState("");
  const [todoItems, setTodoItems] = React.useState([]);

  function deleteTodo(id) {
    const newList = todoItems.filter((task) => task.id !== id);
    console.log(newList);
    setTodoItems(newList);
  }

  function handleClick(e) {
    e.preventDefault();
    if (todoValue !== "") {
      const id = todoItems.length + 1;
      setTodoItems((prev) => [...prev, {id: id, task: todoValue}]);
      setTodoValue("");
    }
  }
  return (
    <div>
      <h1 className="text-center text-6xl mb-10 font-bold">Todo List</h1>
      <form className="flex flex-row align-center">
        <input
          className="outline-none border-2 border-slate-900 rounded-xl mr-4 px-4 py-1 w-96"
          type="text"
          id="todoValue"
          name="todoValue"
          value={todoValue}
          onChange={({ target }) => setTodoValue(target.value)}
          placeholder="Todo value"
        />
        <button
          onClick={handleClick}
          className="bg-slate-500 py-1 px-4 rounded-xl text-white"
        >
          Add
        </button>
      </form>
      <ul>
        {todoItems &&
          todoItems.map((item) => (
            <Todo
              key={item.id}
              nome={item.task}
              onClick={() => deleteTodo(item.id)}
            />
          ))}
      </ul>
    </div>
  );
}

export default App;
