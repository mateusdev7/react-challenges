const Todo = ({ nome, onClick }) => {
  return (
    <li className="flex flex-row items-center justify-between p-4 rounded-lg box-border mt-4 border-2">
      <p>{nome}</p>
      <button
        onClick={onClick}
        className="text-lg font-bold bg-slate-200 py-1 px-2 rounded-full"
      >
        X
      </button>
    </li>
  );
};

export default Todo;
